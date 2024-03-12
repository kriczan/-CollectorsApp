import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICardData } from '../../model/ICardResponse';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _userCollection = new BehaviorSubject<ICardData[]>([]);
  userCollectionObservator = this._userCollection.asObservable();

  setUserCollection(cards: ICardData[]) {
    const currentCollection = this._userCollection.getValue();
    const updatedCollection = [...currentCollection, ...cards];
    this._userCollection.next(updatedCollection);
  }
}
