import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
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

  getRandomCards(count: number): Observable<any> {
    return this.getCards().pipe(
      map(cards => {
        const shuffled = this.shuffleArray(cards.data);
        return shuffled.slice(0, count);
      })
    );
  }

  private shuffleArray(array: any[]): any[] {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}

