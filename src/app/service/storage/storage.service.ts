import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICardData } from '../../model/ICardResponse';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _userCollection = new BehaviorSubject<ICardData[]>([]);
  userCollectionObservator = this._userCollection.asObservable();

  addToUserCollection(cards: ICardData[]) {
    const currentCollection = this._userCollection.getValue();
    const updatedCollection = [...currentCollection, ...cards];
    this._userCollection.next(updatedCollection);
  }

  replaceCards(oldCard: ICardData, newCard: ICardData) {
    const currentCollection = this._userCollection.getValue();
    const index = currentCollection.findIndex(card => card.id === oldCard.id);
    if (index !== -1) {
      const updatedCollection = [...currentCollection];
      updatedCollection[index] = newCard;
      this._userCollection.next(updatedCollection);
    } else {
      console.warn("Old card not found in the collection.");
    }
  }
}
