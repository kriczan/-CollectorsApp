import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from '../../model/ICard';
import { CardService } from '../../service/api/card.service';
import { CollectionService } from '../../service/collection/collection.service';
import { StorageService } from '../../service/storage/storage.service';
import { CardManagement } from '../../utility/CardManagement';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent extends CardManagement implements OnInit {

  constructor(private router: Router, cardService: CardService, storageService: StorageService, collectionService: CollectionService) {
    super(cardService, storageService, collectionService);
  }

  ngOnInit(): void {
    this.setAllCards();
    this.setUserCollection();
  }

  isCardInUserCollection(card: ICard): boolean {
    return this.userCollection.cardAmountList.some(userCard => userCard.cardId === card.id);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
