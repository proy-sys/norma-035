import { Component } from '@angular/core';
import { InfoGuiasService } from '../../../../services/info-guias.service';
import { InfoTrabajador } from '../../../../interfaces/info-trabajador.interfce';
import { InfoTrabajadorService } from '../../../../services/info-trabajador.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-guia3-result',
  templateUrl: './guia3-result.component.html',
  styleUrls: ['./guia3-result.component.sass']
})
export class Guia3ResultComponent {

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
    this.ruta.navigate(['administrador/guia3-list']);
  }
}


