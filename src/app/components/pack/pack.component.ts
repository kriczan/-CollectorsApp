
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICardAttribute, ICardData } from '../../model/ICardResponse';
import { CardService } from '../../service/api/card.service';
import { StorageService } from '../../service/storage/storage.service';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrl: './pack.component.scss',
})
export class PackComponent {

  databaseUrl = 'http://localhost:1337';
  cards: ICardData[] = [];
  isPackOpened: boolean = false;
  canOpenPack: boolean = true; // Można dodać logikę sprawdzającą czas

  constructor(private router: Router, private cardService: CardService, private storageService: StorageService) { }

  openPack(): void {
    if (this.canOpenPack) {
      this.isPackOpened = true;
      this.cardService.getCards().subscribe(result => {
        if (result.data && result.data.length > 0) {
          const tempCards = [...result.data];
          const randomCards = [];
          for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * tempCards.length);
            randomCards.push(tempCards.splice(randomIndex, 1)[0]);
          }
          this.cards = randomCards;
          this.storageService.setUserCollection(this.cards);
        } else {
          console.error("Empty data received from API.");
        }
      });
    }
  }

  getCardImageUrl(card: ICardAttribute): string {
    return this.databaseUrl + card.url;
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
