import { HttpInterceptorFn } from '@angular/common/http';

export const userInterceptor: HttpInterceptorFn = (req, next) => {

  const username = localStorage.getItem('user');

  if (username) {
    req = req.clone({
      setHeaders: {
        User: username
      }
    });
  }

  return next(req);
};
