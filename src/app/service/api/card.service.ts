import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICard } from '../../model/ICard';

@Injectable({
  providedIn: 'root',
})
export class CardService {

  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getCards(): Observable<ICard[]> {
    return this.http.get<ICard[]>(`${this.url}/card`);
  }
}
