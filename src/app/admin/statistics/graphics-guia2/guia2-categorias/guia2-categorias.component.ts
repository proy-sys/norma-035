import { Component, OnInit } from '@angular/core';
import { InfoGuiasService } from 'src/app/services/info-guias.service';
import { Router } from '@angular/router';
import { Grafica } from 'src/app/clases/graficas';


@Component({
  selector: 'app-guia2-categorias',
  templateUrl: './guia2-categorias.component.html',
  styleUrls: ['./guia2-categorias.component.sass']
})
export class Guia2CategoriasComponent implements OnInit {

  ambienteTrabajo: Grafica;
  propiosActividad: Grafica;
  tiempoTrabajo: Grafica;
  liderazgoRelaciones: Grafica;

 constructor(private ruta: Router, infoGuia: InfoGuiasService) {

     this.ambienteTrabajo = new Grafica(infoGuia);
     this.propiosActividad = new Grafica(infoGuia);
     this.tiempoTrabajo = new Grafica(infoGuia);
     this.liderazgoRelaciones = new Grafica(infoGuia);

 }

 ngOnInit(){

   this.ambienteTrabajo.resultadoCategoriaAmb(2);

   this.propiosActividad.resultadoCategoriaFac(2);

   this.tiempoTrabajo.resultadoCategoriaLid(2);

   this.liderazgoRelaciones.resultadoCategoriaOrg(2);

 }

 irListado(){
   this.ruta.navigate(['administrador/guia2-opciones']);
 }

}
