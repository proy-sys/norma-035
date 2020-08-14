import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guia3-opciones',
  templateUrl: './guia3-opciones.component.html',
  styleUrls: ['./guia3-opciones.component.sass']
})
export class Guia3OpcionesComponent {

  mostrar = false;
  mostrar2 = false;

  constructor(private ruta: Router) { }

  verGraficaTotal() {
    this.ruta.navigate(['administrador/guia3-general']);
  }

  verGraficaCategorias() {
    this.ruta.navigate(['administrador/guia3-categorias'])
  }

  verGraficaDominios() {
    this.ruta.navigate(['administrador/guia3-dominios'])
  }

}
