import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICardData } from '../../model/ICardResponse';
import { CardService } from '../../service/api/card.service';
import { StorageService } from '../../service/storage/storage.service';
import { CardManagement } from '../../utility/CardManagement';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent extends CardManagement implements OnInit, AfterViewInit {

  constructor(private router: Router, cardService: CardService, storageService: StorageService) {
    super(cardService, storageService);
  }

  ngAfterViewInit(): void {
    this.getUserCollection();
  }

  ngOnInit(): void {
    this.getAllCards();
  }

  isCardInUserCollection(card: ICardData): boolean {
    return this.userCards.some(userCard => userCard.id === card.id);
  }

  getCountOfTheSameCardInCollection(card: ICardData): number {
    let cardNumber: number = 0;
    this.userCards.forEach(cardInCollection => {
      if (cardInCollection.id == card.id) {
        cardNumber++;
      }
    })
    return cardNumber;
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
