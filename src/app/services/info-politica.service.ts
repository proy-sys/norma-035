import { Injectable } from '@angular/core';
import { InfoPolitica } from '../interfaces/info-politica.interface';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPoliticaService {


  private API_REST  = 'http://localhost/norma035-back/public/politica';
  private httpHeader = new HttpHeaders(
                                        {
                                          'Content-Type' : 'application/json' ,
                                           Authorization : 'RcgkvUAAOpGckyWonLANuTAZEFtU7VkZ'
                                        }
 );

   constructor(private http: HttpClient) {
   }

   getListadoPoliticas(): Observable<any> {
         return this.http.get<InfoPolitica[]>(this.API_REST);
   }
   setPolitica(id: number){
         return this.http.get(this.API_REST + '/' + id + '/setPolitica');
   }

   getPolitica(id: number) {
    return this.http.get<any>(this.API_REST + '/' + id);
  }

  actualizarPolitica(id: number, descripcionPolitica: string){
      return this.http.put<any>( this.API_REST + '/' + id, {descripcion: descripcionPolitica}, { headers: this.httpHeader});
  }

  verificarEstado(){
       return this.http.get<any>(this.API_REST + '/verificarEstado');
  }

}


