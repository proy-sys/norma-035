import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { InfoSugerenciaQueja } from '../interfaces/info-sugerencia-queja.interface.';
import { InfoTrabajador } from '../interfaces/info-trabajador.interfce';
import { InfoAuthenticationService } from './info-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InfoSugerenciaQuejaService {

  private httpHeader = new HttpHeaders( {
    'Content-Type' : 'application/json',
    Authorization : 'RcgkvUAAOpGckyWonLANuTAZEFtU7VkZ'
  });

  apiToken = '';


          //  private API_REST = 'http://itebio-normas.com/norma035-back/public/sugerencia_queja';
              private API_REST = 'http://localhost/norma035-back/public/sugerencia_queja';

  constructor(private http: HttpClient, private servicio: InfoAuthenticationService) {
  }

  getListadoQueja_Sugerencia(): Observable<any[]> {
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.get<InfoSugerenciaQueja[]>(this.API_REST + '?api_token=' + this.apiToken );
  }
  getQueja_Sugerencia(id: number): Observable<any> {
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.get<InfoSugerenciaQueja>(this.API_REST + '/' + id + '?api_token=' + this.apiToken );
  }
  actualizarSugerencia(mysugerencia: InfoSugerenciaQueja): Observable<any>{
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.put<InfoSugerenciaQueja>( this.API_REST + '/' +
     mysugerencia.id + '?api_token=' + this.apiToken , mysugerencia, { headers: this.httpHeader});
  }
  setStatus(id: number, status: boolean){
     this.apiToken = this.servicio.getCurrentUser().user.api_token;
     return this.http.get(this.API_REST + '/' + id + '/' + status + '?api_token=' + this.apiToken );
  }
   crearQuejaSugerencia(newSugerenciaQueja: InfoSugerenciaQueja){
     this.apiToken = this.servicio.getCurrentUser().user.api_token;
     return this.http.post( this.API_REST + '?api_token=' + this.apiToken , newSugerenciaQueja, { headers: this.httpHeader});
  }
}
