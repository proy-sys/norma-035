import { Injectable } from '@angular/core';
import { InfoActividad } from '../interfaces/info-actividad.interface';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { InfoAuthenticationService } from './info-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InfoActividadService {

  private httpHeader = new HttpHeaders( {
    'Content-Type' : 'application/json' ,
    Authorization: 'RcgkvUAAOpGckyWonLANuTAZEFtU7VkZ'
  });

          //  private API_REST = 'http://itebio-normas.com/norma035-back/public/actividad';
              private API_REST = 'http://localhost/norma035-back/public/actividad';
  apiToken = '';
  constructor(private http: HttpClient, private servicio: InfoAuthenticationService) {

  }

  getListadoactividades(): Observable<any[]> {
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.get<InfoActividad[]>(this.API_REST + '?api_token=' + this.apiToken);
  }
  getActividad(id: number): Observable<any> {
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.get<InfoActividad>(this.API_REST + '/' + id + '?api_token=' + this.apiToken);
  }
  crearActividad(newActividad: InfoActividad){
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.post( this.API_REST + '?api_token=' + this.apiToken, newActividad, { headers: this.httpHeader});
  }
  actualizarActividad(myactividad: InfoActividad): Observable<any>{
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.put<InfoActividad>( this.API_REST + '/' + myactividad.id + '?api_token=' + 
    this.apiToken, myactividad , { headers: this.httpHeader});
  }
  deleteActividad(id: number){
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.delete( this.API_REST + '/' + id + '?api_token=' + this.apiToken, { headers: this.httpHeader});
  }

  getTotalActividades() {
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.get(this.API_REST + '/cantidad' + '?api_token=' + this.apiToken);
  }
}
