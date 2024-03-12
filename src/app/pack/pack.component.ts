import { CardModel } from './model/CardModel';
import { CardService } from '../card.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrl: './pack.component.scss',
})
export class PackComponent {
  cards: CardModel[] = [];
  isPackOpened: boolean = false;
  canOpenPack: boolean = true; // Można dodać logikę sprawdzającą czas

  constructor(private router: Router, private cardService: CardService) {}

  ngOnInit() {}

  openPack(): void {
    if (this.canOpenPack) {
      console.log('Can open pack');
      this.getRandomCards(5);
    }
  }

  getRandomCards(count: number): void {
    this.cardService
      .getCards()
      .pipe(map((cards: CardModel[]) => this.shuffleArray(cards).slice(0, count)))
      .subscribe(
        (randomCards: CardModel[]) => {
          console.log('Pobieranie randomowych kart');
          this.cards = randomCards;
          console.log(this.cards);
        },
        (error: any) => {
          console.error('Błąd podczas pobierania kart', error);
        }
      );
  }

  private shuffleArray(array: CardModel[]): CardModel[] {
    let randomCards = [array[0]];
    return randomCards;
  }

  getCardImageUrl(card: CardModel): string {
    return card.obverse.url;
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
