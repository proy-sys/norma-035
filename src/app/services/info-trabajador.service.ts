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
    'Content-Type' : 'application/json',
     Authorization : 'RcgkvUAAOpGckyWonLANuTAZEFtU7VkZ'
 });

      //   private API_REST = 'http://itebio-normas.com/norma035-back/public/trabajador';
        private API_REST = 'http://localhost/norma035-back/public/trabajador';
     apiToken = '';

  constructor(private http: HttpClient, private servicio: InfoAuthenticationService) {
  }

  getListadotrabajadores(): Observable<any[]> {
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.get<InfoTrabajador[]>(this.API_REST + '?api_token=' + this.apiToken);
  }
  getTrabajador(id: number): Observable<any> {
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.get<InfoTrabajador>(this.API_REST + '/' + id + '?api_token=' + this.apiToken);
  }
  crearTrabajador(newTrabajador: InfoTrabajador){
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.post( this.API_REST + '?api_token=' + this.apiToken, newTrabajador, { headers: this.httpHeader});
  }
  actualizarTrabajador(mytrabajador: InfoTrabajador): Observable<any>{
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.put<InfoTrabajador>( this.API_REST + '/' + mytrabajador.id + '?api_token=' + this.apiToken,
     mytrabajador , { headers: this.httpHeader});
  }
  deleteTrabajador(id: number): Observable<any>{
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.delete( this.API_REST + '/' + id + '?api_token=' + this.apiToken, { headers: this.httpHeader});
  }
  getTotalTrabajadores(): any {
     this.apiToken = this.servicio.getCurrentUser().user.api_token;
     return this.http.get(this.API_REST + '/cantidad' + '?api_token=' + this.apiToken, { headers: this.httpHeader});
  }

  asignarPoliticaTrabajador(): any {
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.get(this.API_REST + '/acceptPolitica' + '?api_token=' + this.apiToken, { headers: this.httpHeader});
  }

  getContestaronTrabajadores(guia: number): Observable<any[]>{

    this.apiToken = this.servicio.getCurrentUser().user.api_token;

    return this.http.get<any[]>(this.API_REST + '/contestaron/' + guia + '?api_token=' + this.apiToken);
  }
}
