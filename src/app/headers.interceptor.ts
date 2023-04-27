import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, concatMap, first, switchMap, take } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getAccessToken } from './app-state/selectors/user.selectors';
import { AppState } from './app-state/reducers';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private store: Store<AppState>) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

 
    return this.store.pipe(
      select(getAccessToken),
      take(1),
      switchMap(data => {
          if (data) {
            request = request.clone({
              setHeaders: { Authorization: `Bearer ${data}` }
            });
            return next.handle(request);
          } else {
            return next.handle(request);
          }

      })
    ) 


  }
}
