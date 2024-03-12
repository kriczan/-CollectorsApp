import { CardService } from '../card.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrl: './pack.component.scss'
})
export class PackComponent {
  cards: any[] = [];
  isPackOpened: boolean = false;
  canOpenPack: boolean = true; // Można dodać logikę sprawdzającą czas

  constructor(private router: Router, private cardService: CardService) {}

  ngOnInit() {
  }

  openPack(): void {
    if(this.canOpenPack) {
      this.cardService.getRandomCards(5).subscribe(
        (randomCards) => {
          this.cards = randomCards;
          this.isPackOpened = true;
          this.canOpenPack = false;
          // Rozpocznij odliczanie do następnego otwarcia paczki
        },
        (error) => {
          console.error('Błąd podczas otwierania paczki', error);
        }
      );
    }
  }

  getCardImageUrl(card: any): string {
    return card.obverse.url;
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
