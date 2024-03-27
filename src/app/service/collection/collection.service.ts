import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddCardsToCollection } from '../../model/IAddCardsToCollection';
import { ICardCollection } from '../../model/ICardCollection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private url = 'http://localhost:8080/api/collection';

  constructor(private http: HttpClient) { }

  getCollection(): Observable<ICardCollection> {
    let params = new HttpParams();
    return this.http.get<ICardCollection>(this.url, { params });
  }

  saveCardsInCollection(addCardsToCollection: IAddCardsToCollection): Observable<ICardCollection> {
    return this.http.post<ICardCollection>(this.url, addCardsToCollection);
  }

  trade(oldCardId: number, newCardId: number): Observable<ICardCollection> {
    let params = new HttpParams();
    params = params.set("oldCardId", oldCardId.toString());
    params = params.set("newCardId", newCardId.toString());
    return this.http.post<ICardCollection>(this.url + '/trade', null, { params });
  }
}
