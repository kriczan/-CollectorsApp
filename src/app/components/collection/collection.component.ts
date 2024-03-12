import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICardAttribute, ICardData } from '../../model/ICardResponse';
import { CardService } from '../../service/api/card.service';
import { StorageService } from '../../service/storage/storage.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent implements OnInit, AfterViewInit {

  databaseUrl = 'http://localhost:1337';
  cards: ICardData[] = [];
  userCards: ICardData[] = [];

  constructor(private router: Router, private cardService: CardService, private storageService: StorageService) { }

  ngAfterViewInit(): void {
    this.getUserCollection();
  }

  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards() {
    this.cardService.getCards().subscribe(result => {
      this.cards = result.data;
    })
  }

  getUserCollection() {
    this.storageService.userCollectionObservator.subscribe(result => {
      this.userCards = result;
      console.log(this.userCards);
    })
  }

  isCardInUserCollection(card: ICardData): boolean {
    return this.userCards.some(userCard => userCard.id === card.id);
  }


  getCardImageUrl(card: ICardAttribute): string {
    return this.databaseUrl + card.url;
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
