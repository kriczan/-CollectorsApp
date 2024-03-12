import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private apiUrl = 'http://localhost:1337/api';

  constructor(private http: HttpClient) {}

  /**
   *
   * @returns gets all cards
   */
  getCards(): Observable<any> {
    let params = new HttpParams();
    params = params.set('populate', '*');
    params = params.set('pagination[page]', 1);
    params = params.set('pagination[pageSize]', 50);
    return this.http.get(`${this.apiUrl}/cards`, { params });
  }
}
