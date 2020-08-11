import { Injectable } from '@angular/core';
import { InfoDocumento } from '../interfaces/info-documento.interface';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoDocumentoService {

  private httpHeader = new HttpHeaders( {
    'Content-Type' : 'application/json' ,
    Authorization: 'RcgkvUAAOpGckyWonLANuTAZEFtU7VkZ'
  });

  private API_REST = 'http://localhost/norma035-back/public/documento';

  constructor(private http: HttpClient) {
  }

  getListadodocumentos(): Observable<any[]> {
    return this.http.get<InfoDocumento[]>(this.API_REST);
  }
  getDocumento(id: number): Observable<any> {
    return this.http.get<InfoDocumento>(this.API_REST + '/' + id);
  }
  crearDocumento(newDocumento: InfoDocumento){
    return this.http.post( this.API_REST, newDocumento, { headers: this.httpHeader});
  }
  actualizarDocumento(mydocumento: InfoDocumento): Observable<any>{
    return this.http.put<InfoDocumento>( this.API_REST + '/' + mydocumento.id, mydocumento , { headers: this.httpHeader});
  }
  deleteDocumento(id: number){
     return this.http.delete( this.API_REST + '/' + id, { headers: this.httpHeader});
  }

  getTotalDocumentos() {
     return this.http.get(this.API_REST + '/cantidad');
  }
}
