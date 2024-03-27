import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const username = localStorage.getItem('user');

    if (username) {
      let requ = request.clone({
        setHeaders: {
          User: username
        }
      });
      return next.handle(requ);
    }
    return next.handle(request);
  }
}
