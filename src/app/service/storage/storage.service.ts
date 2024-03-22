import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICard } from '../../model/ICard';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _cards = new BehaviorSubject<ICard[]>([]);
  cardsObservator = this._cards.asObservable();

  constructor() { }

  setCards(cards: ICard[]): void {
    this._cards.next(cards);
  }
}
