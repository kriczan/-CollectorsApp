import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICardData } from '../../model/ICardResponse';
import { CardService } from '../../service/api/card.service';
import { StorageService } from '../../service/storage/storage.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.scss'
})
export class TradeComponent implements OnInit {

  databaseUrl = 'http://localhost:1337';
  allCards: ICardData[] = [];
  userCards: ICardData[] = [];
  cardsToTrade: ICardData[] = [];
  lastTradeTime: number | null = null;

  constructor(private router: Router, private storageService: StorageService, private cardService: CardService) { }

  ngAfterViewInit(): void {
    this.getUserCollection();
  }

  ngOnInit(): void {
    this.getAllCards();
    this.getUserCollection();
  }

  getUserCollection() {
    this.storageService.userCollectionObservator.subscribe(result => {
      this.userCards = result.filter((card, index, self) =>
        index === self.findIndex(c => c.attributes.obverse.data.attributes.name === card.attributes.obverse.data.attributes.name)
      );
    });
  }

  getAllCards() {
    this.cardService.getCards().subscribe(result => {
      this.allCards = result.data;
    })
  }

  getCardImageUrl(card: ICardData): string {
    return this.databaseUrl + card.attributes.obverse.data.attributes.url;
  }

  getCardName(card: ICardData): string {
    return card.attributes.obverse.data.attributes.name;
  }

  setCardFromUserCollectionToTrade(card: ICardData): void {
    this.cardsToTrade[0] = card;
  }

  setCardFromAllCardsToTrade(card: ICardData): void {
    this.cardsToTrade[1] = card;
  }

  tradeCards() {
    const currentTime = Date.now();
    const lastOpenTime = parseInt(localStorage.getItem('lastTradeTime') || '0', 10);
    if (lastOpenTime === 0 || (currentTime - lastOpenTime) >= 180000) {
      this.storageService.replaceCards(this.cardsToTrade[0], this.cardsToTrade[1]);
      localStorage.setItem('lastTradeTime', String(currentTime));
    }
    this.getUserCollection();
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
