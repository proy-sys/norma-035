import { Component } from '@angular/core';
import { InfoTrabajadorService } from '../../../../services/info-trabajador.service';
import { InfoTrabajador } from '../../../../interfaces/info-trabajador.interfce';
import { InfoGuiasService } from '../../../../services/info-guias.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    this.infoGuiasService.getGuia(2).subscribe(
      data => {
        this.listaTrabajadores = data;
      }
    );
  }

// ************************** RUTAS *****************************
  irListado() {
    this.ruta.navigate(['administrador/guia2-list']);
  }

}