import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../model/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  loginUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.url}/user`, user);
  }
}
