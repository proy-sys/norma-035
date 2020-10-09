import { Injectable } from '@angular/core';
import { InfoPolitica } from '../interfaces/info-politica.interface';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { InfoAuthenticationService } from './info-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InfoPoliticaService {


             // private API_REST  = 'http://itebio-normas.com/norma035-back/public/politica';
               private API_REST  = 'http://localhost/norma035-back/public/politica';
  apiToken = '';
  private httpHeader = new HttpHeaders(
                                        {
                                          'Content-Type' : 'application/json' ,
                                           Authorization : 'RcgkvUAAOpGckyWonLANuTAZEFtU7VkZ'
                                        }
 );

   constructor(private http: HttpClient, private servicio: InfoAuthenticationService) {
   }

   getListadoPoliticas(): Observable<any> {
         this.apiToken = this.servicio.getCurrentUser().user.api_token;
         return this.http.get<InfoPolitica[]>(this.API_REST + '?api_token=' + this.apiToken );
   }
   setPolitica(id: number){
         this.apiToken = this.servicio.getCurrentUser().user.api_token;
         return this.http.get(this.API_REST + '/' + id + '/setPolitica' + '?api_token=' + this.apiToken);
   }

   getPolitica(id: number): Observable<any> {
     this.apiToken = this.servicio.getCurrentUser().user.api_token;
     return this.http.get<any>(this.API_REST + '/' + id  + '?api_token=' + this.apiToken);
  }

  actualizarPolitica(id: number, descripcionPolitica: string){
      this.apiToken = this.servicio.getCurrentUser().user.api_token;
      return this.http.put<any>( this.API_REST + '/' + id + '?api_token=' + this.apiToken,
       {descripcion: descripcionPolitica}, { headers: this.httpHeader});
  }

  verificarEstado(){
       this.apiToken = this.servicio.getCurrentUser().user.api_token;
       return this.http.get<any>(this.API_REST + '/verificarEstado' + '?api_token=' + this.apiToken);
  }

}


