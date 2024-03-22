import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICard } from '../../model/ICard';
import { ICollectionResponse } from '../../model/ICollectionResponse';

@Injectable({
  providedIn: 'root',
})
export class CardService {

  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getCards(): Observable<ICard[]> {
    return this.http.get<ICard[]>(`${this.url}/card`);
  }

  getUserCollection(): Observable<ICollectionResponse> {
    let params = new HttpParams();
    params = params.set('populate', '*');
    params = params.set('pagination[page]', 1);
    params = params.set('pagination[pageSize]', 50);
    return this.http.get<ICollectionResponse>(`${this.url}/collections`, { params });
  }
}
