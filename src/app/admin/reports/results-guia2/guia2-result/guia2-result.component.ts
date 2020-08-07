import { Component, OnInit } from '@angular/core';
import { InfoGuiasService } from 'src/app/services/info-guias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoTrabajadorService } from '../../../../services/info-trabajador.service';
import { InfoTrabajador } from '../../../../interfaces/info-trabajador.interfce';

@Component({
  selector: 'app-guia2-result',
  templateUrl: './guia2-result.component.html',
  styleUrls: ['./guia2-result.component.sass']
})
export class Guia2ResultComponent {

  trabajador: InfoTrabajador;
  listaTrabajadores: any = [];

  constructor(public infoGuiasService: InfoGuiasService,
              public infoTrabajadorService: InfoTrabajadorService,
              public activatedRoute: ActivatedRoute,
              private ruta: Router)
              {
                this.cargarTrabajador();
                this.listadoTrabajadores();
              }

         // *************************** EDIT ****************************
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

  listadoTrabajadores() {
    this.infoGuiasService.getGuia(1).subscribe(
      data => {
        this.listaTrabajadores = data;
        console.log(this.listaTrabajadores);
      }
    );
  }

// ************************** RUTAS *****************************
  irListado() {
    this.ruta.navigate(['administrador/guia2-list']);
  }

}
