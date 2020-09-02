import { Injectable } from '@angular/core';
import { InfoTrabajador } from '../interfaces/info-trabajador.interfce';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { InfoAuthenticationService } from './info-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InfoTrabajadorService {

  private httpHeader = new HttpHeaders( {
    'Content-Type' : 'application/json'
});


  private API_REST = 'http://localhost/norma035-back/public/trabajador';

  constructor(private http: HttpClient, private servicio: InfoAuthenticationService) {
  }

  getListadotrabajadores(): Observable<any[]> {
    return this.http.get<InfoTrabajador[]>(this.API_REST);
  }
  getTrabajador(id: number): Observable<any> {
    return this.http.get<InfoTrabajador>(this.API_REST + '/' + id);
  }
  crearTrabajador(newTrabajador: InfoTrabajador){
    console.log(newTrabajador);
    return this.http.post( this.API_REST, newTrabajador, { headers: this.httpHeader});
  }
  actualizarTrabajador(mytrabajador: InfoTrabajador): Observable<any>{
    return this.http.put<InfoTrabajador>( this.API_REST + '/' + mytrabajador.id, mytrabajador , { headers: this.httpHeader});
  }
  deleteTrabajador(id: number): Observable<any>{
    return this.http.delete( this.API_REST + '/' + id, { headers: this.httpHeader});
  }
  getTotalTrabajadores(): any {
     return this.http.get(this.API_REST + '/cantidad', { headers: this.httpHeader});
  }
}
