import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { InfoSugerenciaQueja } from '../interfaces/info-sugerencia-queja.interface.';
import { InfoTrabajador } from '../interfaces/info-trabajador.interfce';

@Injectable({
  providedIn: 'root'
})
export class InfoSugerenciaQuejaService {

  private httpHeader = new HttpHeaders( {
    'Content-Type' : 'application/json' ,
     Authorization : 'RcgkvUAAOpGckyWonLANuTAZEFtU7VkZ'
});


  private API_REST = 'http://localhost/norma035-back/public/sugerencia_queja';

  constructor(private http: HttpClient) {
  }

  getListadoQueja_Sugerencia(): Observable<any[]> {
    return this.http.get<InfoSugerenciaQueja[]>(this.API_REST);
  }
  getQueja_Sugerencia(id: number): Observable<any> {
    return this.http.get<InfoSugerenciaQueja>(this.API_REST + '/' + id);
  }
  actualizarSugerencia(mysugerencia: InfoSugerenciaQueja): Observable<any>{
    return this.http.put<InfoSugerenciaQueja>( this.API_REST + '/' + mysugerencia.id, mysugerencia, { headers: this.httpHeader});
  }
  setStatus(id: number, status: boolean){
     console.log(id , status);
     return this.http.get(this.API_REST + '/' + id + '/' + status);
   }
   crearQuejaSugerencia(newSugerenciaQueja: InfoSugerenciaQueja){
     console.log(newSugerenciaQueja);
     return this.http.post( this.API_REST, newSugerenciaQueja, { headers: this.httpHeader});
  }
}
