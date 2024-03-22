import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from '../../model/ICard';
import { CardService } from '../../service/api/card.service';
import { CardManagement } from '../../utility/CardManagement';
import { StorageService } from '../../service/storage/storage.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.scss'
})
export class TradeComponent extends CardManagement implements OnInit {

  cardsToTrade: ICard[] = [];
  lastTradeTime: number | null = null;

  constructor(private router: Router, cardService: CardService, storageService: StorageService) {
    super(cardService, storageService);
  }

  ngOnInit(): void {
    this.getAllCards();
    this.getUserCollection();
  }

  override getUserCollection() {
    this.cardService.getUserCollection().subscribe(result => {
      // this.userCards = result.filter((card, index, self) =>
      //   index === self.findIndex(c => c.attributes.obverse.data?.attributes.name === card.attributes.obverse.data?.attributes.name)
      // );
      this.userCards = result.data;
    });
  }

  // setCardFromUserCollectionToTrade(card: ICollectionCardData): void {
  //   this.userCards.forEach((c) => {
  //     c.selected = false;
  //   })
  //   card.selected = true;

  //   // const index = this.userCards.indexOf(card);
  //   this.cardsToTrade[0] = card;
  // }

  // setCardFromAllCardsToTrade(card: ICardData): void {
  //   this.cards.forEach((c) => {
  //     c.selected = false;
  //   })
  //   card.selected = true;

  //   // const index = this.cards.indexOf(card);
  //   this.cardsToTrade[1] = card;
  // }

  // tradeCards() {
  //   const currentTime = Date.now();
  //   const lastOpenTime = parseInt(localStorage.getItem('lastTradeTime') || '0', 10);
  //   if (lastOpenTime === 0 || (currentTime - lastOpenTime) >= 1) {
  //     this.storageService.replaceCards(this.cardsToTrade[0], this.cardsToTrade[1]);
  //     localStorage.setItem('lastTradeTime', String(currentTime));
  //   }
  //   this.getUserCollection();
  // }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
