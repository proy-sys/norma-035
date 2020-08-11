import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guia2-opciones',
  templateUrl: './guia2-opciones.component.html',
  styleUrls: ['./guia2-opciones.component.sass']
})
export class Guia2OpcionesComponent {

  mostrar = false;
  mostrar2 = false;

  constructor(private ruta: Router) { }

  verGraficaTotal() {
    this.ruta.navigate(['administrador/guia2-general']);
  }

  verGraficaAmbiente() {
    this.ruta.navigate(['administrador/guia2-ambiente'])
  }

  verGraficaFactores() {
    this.ruta.navigate(['administrador/guia2-factores'])
  }

}
