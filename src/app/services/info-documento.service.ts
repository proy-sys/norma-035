import { Injectable } from '@angular/core';
import { InfoDocumento } from '../interfaces/info-documento.interface';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { InfoAuthenticationService } from './info-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InfoDocumentoService {

  private httpHeader = new HttpHeaders( {
    'Content-Type' : 'application/json' ,
    Authorization: 'RcgkvUAAOpGckyWonLANuTAZEFtU7VkZ'
  });

              //  private API_REST = 'http://itebio-normas.com/norma035-back/public/documento';
                private API_REST = 'http://localhost/norma035-back/public/documento';
         apiToken = '';

  constructor(private http: HttpClient, private servicio: InfoAuthenticationService) {
  }

  getListadodocumentos(): Observable<any[]> {
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.get<InfoDocumento[]>(this.API_REST  + '?api_token=' + this.apiToken);
  }
  getDocumento(id: number): Observable<any> {
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.get<InfoDocumento>(this.API_REST + '/' + id  + '?api_token=' + this.apiToken);
  }
  crearDocumento(newDocumento: InfoDocumento){
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.post( this.API_REST  + '?api_token=' + this.apiToken, newDocumento, { headers: this.httpHeader});
  }
  actualizarDocumento(mydocumento: InfoDocumento): Observable<any>{
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.put<InfoDocumento>( this.API_REST + '/' + mydocumento.id  +
   '?api_token=' + this.apiToken, mydocumento , { headers: this.httpHeader});
  }
  deleteDocumento(id: number){
    this.apiToken = this.servicio.getCurrentUser().user.api_token;
    return this.http.delete( this.API_REST + '/' + id  + '?api_token=' + this.apiToken, { headers: this.httpHeader});
  }
  getTotalDocumentos() {
     this.apiToken = this.servicio.getCurrentUser().user.api_token;
     return this.http.get(this.API_REST + '/cantidad'  + '?api_token=' + this.apiToken);
  }
}
