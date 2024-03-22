

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAddCardsToCollection } from '../../model/IAddCardsToCollection';
import { ICard } from '../../model/ICard';
import { CardService } from '../../service/api/card.service';
import { CollectionService } from '../../service/collection/collection.service';
import { StorageService } from '../../service/storage/storage.service';
import { CardManagement } from '../../utility/CardManagement';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrl: './pack.component.scss',
})
export class PackComponent extends CardManagement implements OnInit {

  isPackOpened: boolean = false;
  newCards: ICard[] = [];

  constructor(private router: Router, cardService: CardService, storageService: StorageService, collectionService: CollectionService) {
    super(cardService, storageService, collectionService);
  }

  ngOnInit(): void {
    this.setAllCards();
  }

  openPack(): void {
    this.isPackOpened = true;

    const randomCards: ICard[] = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * this.cards.length);
      randomCards.push(this.cards.at(randomIndex)!);
    }
    this.saveCardsInCollection(+localStorage.getItem("userId")!, randomCards);
    this.newCards = randomCards;
  }

  saveCardsInCollection(userId: number, cards: ICard[]) {
    let cardsIds: number[] = [];
    cards.forEach(card => {
      cardsIds.push(card.id);
    })

    let addCardsToCollection: IAddCardsToCollection = {
      userId: userId,
      cardsIds: cardsIds
    }

    this.collectionService.saveCardsInCollection(addCardsToCollection).subscribe(result => {
    })
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}

