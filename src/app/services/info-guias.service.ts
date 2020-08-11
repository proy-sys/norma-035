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
    return this.http.post( this.API_REST + '/addRespuestasGuia/' + id, newRespuestas , {headers: this.httpHeaders});
}

getGuia(id: number){
  return this.http.get( this.API_REST + '/g/' + id, {headers: this.httpHeaders});
}

getCalificacionGuia(id, guia: number){
  return this.http.get( this.API_REST + '/califTrabajadorGuia/' + id + '/' + guia, {headers: this.httpHeaders});
}

getTrabajadorResultado(guia: number){
  return this.http.get( this.API_REST + '/trabajadorResultado/' + guia, {headers: this.httpHeaders});
}

getResultadoTotal(guia: number){
  return this.http.get( this.API_REST + '/resultadoTotal/' + guia, {headers: this.httpHeaders});
}

getResultadoAmbiente(guia: number){
  return this.http.get( this.API_REST + '/resultadoAmbiente/' + guia, {headers: this.httpHeaders});
}

}
