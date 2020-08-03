
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/info-user.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtResponseI } from '../interfaces/info-jwt.interface';
import { RoleValidator } from '../auth/helpers/roleValidator';
@Injectable({
    providedIn: 'root'
})

export class InfoAuthenticationService extends RoleValidator{

 private API_REST = 'http://localhost/norma035-back/public/login';
 private jwtUser: JwtResponseI;

 private httpHeaders = new HttpHeaders(
    {
      'Content-Type' : 'application/json' ,
       Authorization : 'RcgkvUAAOpGckyWonLANuTAZEFtU7VkZ'
    }
);

 authSubject = new BehaviorSubject(false);

 constructor(private http: HttpClient) {
     super();
 }

 login(user: User): Observable<any>{
      return this.http.post<JwtResponseI>( this.API_REST, user, { headers: this.httpHeaders});
 }
  getToken() {
    const token = JSON.parse(localStorage.getItem('usuario'));
    return token.api_token;
  }


  getCurrentUser(){
     const user = localStorage.getItem('usuario');
     if (user === null || user === undefined || user.trim().length === 0){
               return null;
    }else{
      this.jwtUser = JSON.parse(user);
      return this.jwtUser;
    }
  }

  updateUser(jwtUser: JwtResponseI): void{
     localStorage.setItem('usuario', JSON.stringify(jwtUser));
  }

  logout(){
    const usuario = localStorage.getItem('usuario');
    localStorage.removeItem('usuario');
    return this.http.post( this.API_REST + 'logout', {headers: this.httpHeaders});
  }

}
