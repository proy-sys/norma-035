import { Injectable } from '@angular/core';
import { InfoActividad } from '../interfaces/info-actividad.interface';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoActividadService {

  private httpHeader = new HttpHeaders( {
    'Content-Type' : 'application/json' ,
    Authorization: 'RcgkvUAAOpGckyWonLANuTAZEFtU7VkZ'
  });

  private API_REST = 'http://localhost/norma035-back/public/actividad';

  constructor(private http: HttpClient) {

  }

  getListadoactividades(): Observable<any[]> {
    return this.http.get<InfoActividad[]>(this.API_REST);
  }
  getActividad(id: number): Observable<any> {
    return this.http.get<InfoActividad>(this.API_REST + '/' + id);
  }
  crearActividad(newActividad: InfoActividad){
    return this.http.post( this.API_REST, newActividad, { headers: this.httpHeader});
  }
  actualizarActividad(myactividad: InfoActividad): Observable<any>{
    return this.http.put<InfoActividad>( this.API_REST + '/' + myactividad.id, myactividad , { headers: this.httpHeader});
  }
  deleteActividad(id: number){
    return this.http.delete( this.API_REST + '/' + id, { headers: this.httpHeader});
  }

  getTotalActividades() {
     return this.http.get(this.API_REST + '/cantidad');
  }
}
