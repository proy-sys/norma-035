
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/info-user.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtResponseI } from '../interfaces/info-jwt.interface';
import { RoleValidator } from '../auth/helpers/roleValidator';
import { InfoRespuesta } from '../interfaces/info-respuesta.interface';
@Injectable({
    providedIn: 'root'
})

export class InfoAuthenticationService extends RoleValidator{

 private API_REST = 'http://localhost/norma035-back/public';
 private jwtUser: JwtResponseI;
 private respuesta: InfoRespuesta = {};
 apiToken = '';

 private httpHeaders = new HttpHeaders(
    {
      'Content-Type' : 'application/json'
    }
);

 authSubject = new BehaviorSubject(false);

 constructor(private http: HttpClient) {
     super();
 }


 login(user: User): Observable<any>{
   return this.http.post<JwtResponseI>( this.API_REST + '/login', user, { headers: this.httpHeaders});
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
     this.apiToken = this.getCurrentUser().user.api_token;
     localStorage.removeItem('usuario');
     return this.http.post( this.API_REST + '/logout' + '?api_token=' + this.apiToken, {headers: this.httpHeaders});
  }

  getRespuestas(){
    const res = sessionStorage.getItem('respuestas');
    if (res === null || res === undefined || res.trim().length === 0){
              return null;
   }else{
     this.respuesta = JSON.parse(res);
     return this.respuesta;
   }
 }

  updateRespuestas(respuesta: InfoRespuesta): void{
    sessionStorage.setItem('respuestas', JSON.stringify(respuesta));
  }

  clearRespuestas(){
     sessionStorage.removeItem('respuestas');
  }

}
