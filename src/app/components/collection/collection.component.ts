import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../../service/api/card.service';
import { StorageService } from '../../service/storage/storage.service';
import { CardManagement } from '../../utility/CardManagement';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent extends CardManagement implements OnInit {

  constructor(private router: Router, cardService: CardService, storageService: StorageService) {
    super(cardService, storageService);
  }

  ngOnInit(): void {
    this.getAllCards();
  }

  // isCardInUserCollection(card: ICard): boolean {
  //   return this.userCards.some(userCard => userCard.attributes.cardCollection.data.attributes.name === card.attributes.obverse.data.attributes.name);
  // }

  // getCountOfTheSameCardInCollection(card: ICard): number {
  //   if (this.cards != null) {
  //     let cardNumber: number = 0;
  //     this.userCards.forEach(cardInCollection => {
  //       if (cardInCollection.attributes.cardCollection.data.attributes.name === card.attributes.obverse.data.attributes.name) {
  //         cardNumber++;
  //       }
  //     });
  //     return cardNumber;
  //   }
  //   return 0;
  // }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
