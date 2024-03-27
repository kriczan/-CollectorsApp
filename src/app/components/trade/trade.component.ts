import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from '../../model/ICard';
import { CardService } from '../../service/api/card.service';
import { CollectionService } from '../../service/collection/collection.service';
import { StorageService } from '../../service/storage/storage.service';
import { CardManagement } from '../../utility/CardManagement';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.scss'
})
export class TradeComponent extends CardManagement implements OnInit {

  cardsToTrade: number[] = [];

  constructor(private router: Router, cardService: CardService, storageService: StorageService, collectionService: CollectionService) {
    super(cardService, storageService, collectionService);
  }

  ngOnInit(): void {
    this.setAllCards();
    this.setUserCollection();
  }

  setCardFromUserCollectionToTrade(cardId: number): void {
    this.cardsToTrade[0] = cardId;
  }

  setCardFromAllCardsToTrade(card: ICard): void {
    this.cardsToTrade[1] = card.id;
  }

  tradeCards() {
    this.collectionService.trade(this.cardsToTrade[0], this.cardsToTrade[1]).subscribe(result => {
      window.location.reload();
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
