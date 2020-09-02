import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { InfoAuthenticationService } from './info-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService  implements HttpInterceptor {

  constructor(private router: Router, private infoAuthenticationService: InfoAuthenticationService) {}

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

   /*const accessToken = this.infoAuthenticationService.getCurrentUser().user.api_token;
    if ( accessToken != null) {
      req = req.clone({
        setHeaders: {
            Authorization: 'Bearer ' + accessToken,

        }
     });
    }*/
    return next.handle(req);
  }
}
