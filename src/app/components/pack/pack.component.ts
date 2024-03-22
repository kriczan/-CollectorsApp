

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from '../../model/ICard';
import { CardService } from '../../service/api/card.service';
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

  constructor(private router: Router, cardService: CardService, storageService: StorageService) {
    super(cardService, storageService);
  }

  ngOnInit(): void {
    this.getAllCards();
  }

  openPack(): void {
    this.isPackOpened = true;

    const randomCards: ICard[] = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * this.cards.length);
      randomCards.push(this.cards.at(randomIndex)!);
    }

    //TODO: Save collection to database with card id and user id (find id from username)
    this.newCards = randomCards;
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}

