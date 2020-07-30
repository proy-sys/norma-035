
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/info-user.interface';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtResponseI } from '../interfaces/info-jwt.interface';

@Injectable({
    providedIn: 'root'
})

export class InfoAuthenticationService {
 private token: string;
 private API_REST = 'http://localhost/norma035-back/public/login';
 private httpHeaders = new HttpHeaders(
    {
      'Content-Type' : 'application/json' ,
       Authorization : 'RcgkvUAAOpGckyWonLANuTAZEFtU7VkZ'
    }
);

 authSubject = new BehaviorSubject(false);

 constructor(private http: HttpClient) {}

login(user: User): Observable <JwtResponseI> {
      return this.http.post<JwtResponseI>( this.API_REST, user, { headers: this.httpHeaders});
}
}