import { Component, OnInit } from '@angular/core';
import { InfoGuiasService } from '../../../../services/info-guias.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InfoTrabajadorService } from '../../../../services/info-trabajador.service';
import { InfoTrabajador } from 'src/app/interfaces/info-trabajador.interfce';

@Component({
  selector: 'app-guia1-result',
  templateUrl: './guia1-result.component.html',
  styleUrls: ['./guia1-result.component.sass']
})
export class Guia1ResultComponent {

  trabajador: any = [];
  listaTrabajadores: any = [];
  calificacionTrabajador: any = [];
  calificacionesTrabajador: any = [];

  constructor(public infoGuiasService: InfoGuiasService,
              public infoTrabajadorService: InfoTrabajadorService,
              public activatedRoute: ActivatedRoute,
              private ruta: Router
    ) {
      this.cargarTrabajador();
      this.listadoTrabajadores();
      // this.calificacion();
    }


    listadoTrabajadores() {
      this.activatedRoute.params.subscribe(params => {
        this.infoGuiasService.getGuia2(1, params.id).subscribe(
        data => {
          this.listaTrabajadores = data;
        }, (err) => {
          console.log('Error al cargar:' + err);
        }
      );
    });
  }


  // listadoTrabajadores() {
  //   this.infoGuia1Service.getGuia(1).subscribe(
  //     data => {
  //       this.trabajador = data;
  //       console.log(this.trabajador);
  //     }
  //   );
  // }

  cargarTrabajador(){
    this.activatedRoute.params.subscribe(params => {
      this.infoTrabajadorService.getTrabajador(params.id).subscribe(
        data => {
            this.trabajador = data ;
          }, (err) => {
            console.log('Error al cargar:' + err);
        }
      );
    });
  }

  // ************************** RUTAS *****************************
irListado() {
  this.ruta.navigate(['administrador/guia1-list']);
}
}
