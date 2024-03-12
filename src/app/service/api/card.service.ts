import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ICardResponse } from '../../model/ICardResponse';

@Injectable({
  providedIn: 'root',
})
export class CardService {

  private url = 'http://localhost:1337/api';

  constructor(private http: HttpClient) { }

  getCards(): Observable<ICardResponse> {
    let params = new HttpParams();
    params = params.set('populate', '*');
    params = params.set('pagination[page]', 1);
    params = params.set('pagination[pageSize]', 50);
    return this.http.get<ICardResponse>(`${this.url}/cards`, { params });
  }
}
