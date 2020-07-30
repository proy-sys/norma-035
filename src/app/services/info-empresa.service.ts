import { Injectable } from '@angular/core';
import { InfoEmpresa } from '../interfaces/info-empresa.interface';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoEmpresaService {


  private API_REST  = 'http://localhost/norma035-back/public/empresa';
  private httpHeaders = new HttpHeaders(
                                        {
                                          'Content-Type' : 'application/json' ,
                                           Authorization : 'RcgkvUAAOpGckyWonLANuTAZEFtU7VkZ'
                                        }
);


  constructor(private http: HttpClient) {
      console.log('Servicio empresa Running...!');

   }

  obtenerEmpresa(): Observable<any> {

     return this.http.get<InfoEmpresa>(this.API_REST);

   }

   actualizarEmpresa(empresa: InfoEmpresa){

        return this.http.put( this.API_REST + '/' + empresa.id, empresa , { headers: this.httpHeaders});

   }




}


