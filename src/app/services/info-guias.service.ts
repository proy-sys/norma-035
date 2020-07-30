import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoGuias } from '../interfaces/info-guias.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoGuiasService {

  guia1: InfoGuias = {};
  guia2: InfoGuias = {};
  guia3: InfoGuias = {};

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
}
