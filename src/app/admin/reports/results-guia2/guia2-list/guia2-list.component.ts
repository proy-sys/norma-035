import { Component, OnInit } from '@angular/core';
import { InfoTrabajadorService } from '../../../../services/info-trabajador.service';
import { InfoTrabajador } from '../../../../interfaces/info-trabajador.interfce';
import { Router } from '@angular/router';
import { InfoGuiasService } from '../../../../services/info-guias.service';

@Component({
  selector: 'app-guia2-list',
  templateUrl: './guia2-list.component.html',
  styleUrls: ['./guia2-list.component.sass']
})
export class Guia2ListComponent {

  listaTrabajadores =  new Array<InfoTrabajador>();
  resultadosTrabajadores: any = {};

  constructor(private infoGuiasService: InfoGuiasService,
              private infoTrabajadorService: InfoTrabajadorService,
              private ruta: Router
    ) {
      this.listadoTrabajadores();
      this.calificacion();
    }

  listadoTrabajadores() {
    this.infoTrabajadorService.getContestaronTrabajadores(2).subscribe(
      data => {
        this.listaTrabajadores = data;
        console.log('trabajadores' + this.listaTrabajadores);
      }
    );
  }

  calificacion() {
    //  this.activatedRoute.params.subscribe(params => {
       this.infoGuiasService.getTrabajadorResultado(2).subscribe(
         data => {
           this.resultadosTrabajadores = data;
         }, (err) => {
           console.log('Error al cargar:' + err);
         }
       );
     // });
   }

  // ************************** RUTAS *****************************
  verResult(ide: number) {
    this.ruta.navigate(['administrador/guia2-result', ide]);
  }

}
