import { Injectable } from '@angular/core';
import { InfoEmpresa } from '../interfaces/info-empresa.interface';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { InfoAuthenticationService } from './info-authentication.service';
import { JwtResponseI } from '../interfaces/info-jwt.interface';
import { InfoLugar } from '../interfaces/info-lugar';

@Injectable({
  providedIn: 'root'
})
export class InfoEmpresaService {


    //private API_REST  = 'http://itebio-normas.com/norma035-back/public/empresa';

     private API_REST  = 'http://localhost/norma035-back/public/empresa';

  apiToken = '';

  private httpHeaders = new HttpHeaders(
                                        {
                                          'Content-Type' : 'application/json' ,
                                           Authorization: 'RcgkvUAAOpGckyWonLANuTAZEFtU7VkZ'
                                        }
  );


  constructor(private http: HttpClient, private servicio: InfoAuthenticationService){
  }


  obtenerEmpresa(): Observable<any> {
     this.apiToken = this.servicio.getCurrentUser().user.api_token;
     return this.http.get<InfoEmpresa>(this.API_REST  + '?api_token=' + this.apiToken, { headers: this.httpHeaders});

  }

   actualizarEmpresa(empresa: InfoEmpresa){
      this.apiToken = this.servicio.getCurrentUser().user.api_token;
      return this.http.put( this.API_REST + '/' + empresa.id  + '?api_token=' + this.apiToken , empresa , { headers: this.httpHeaders});
   }

   // obtenerEstadoMunicipio(codigoPostal: number): Observable<InfoLugar>{
   //    return this.http.get<InfoLugar>( this.API_REST + '/cp/' + codigoPostal, { headers: this.httpHeaders});
   // }

}


