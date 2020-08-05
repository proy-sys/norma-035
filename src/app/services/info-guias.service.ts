import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InfoGuias } from '../interfaces/info-guias.interface';
import { InfoRespuesta } from '../interfaces/info-respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoGuiasService {

  guia1: InfoGuias = {};
  guia2: InfoGuias = {};
  guia3: InfoGuias = {};

  private API_REST = 'http://localhost/norma035-back/public/respuesta';

   private httpHeaders = new HttpHeaders(
    {
      'Content-Type' : 'application/json' ,
       Authorization : 'RcgkvUAAOpGckyWonLANuTAZEFtU7VkZ'
    }
  );
  constructor( private http: HttpClient ) {
    this.cargarGuia1();
    this.cargarGuia2();
    this.cargarGuia3();
  }

  private cargarGuia1() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-guia1.json')
    .subscribe(( resp: InfoGuias) => {

      this.guia1 = resp;

    });
}

private cargarGuia2() {
  // Leer el archivo JSON
  this.http.get('assets/data/data-guia2.json')
  .subscribe(( resp: InfoGuias) => {

    this.guia2 = resp;

  });
}

private cargarGuia3() {
  // Leer el archivo JSON
  this.http.get('assets/data/data-guia3.json')
  .subscribe(( resp: InfoGuias) => {

    this.guia3 = resp;

  });
}


addRespuestasGuia(newRespuestas: InfoRespuesta, id: number): any{
  
    return this.http.post( this.API_REST + '/addRespuestasGuia2/' + id, newRespuestas , {headers: this.httpHeaders});
}

}
