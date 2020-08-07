import { Component, OnInit } from '@angular/core';
import { InfoTrabajadorService } from '../../../../services/info-trabajador.service';
import { InfoTrabajador } from '../../../../interfaces/info-trabajador.interfce';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guia2-list',
  templateUrl: './guia2-list.component.html',
  styleUrls: ['./guia2-list.component.sass']
})
export class Guia2ListComponent {

  listaTrabajadores =  new Array<InfoTrabajador>();

  constructor(private infoTrabajadorService: InfoTrabajadorService,
              private ruta: Router
    ) {
      this.listadoTrabajadores();
    }

  listadoTrabajadores() {
    this.infoTrabajadorService.getListadotrabajadores().subscribe(
      data => {
        this.listaTrabajadores = data;
      }
    );
  }

  // ************************** RUTAS *****************************
  verResult(ide: number) {
    this.ruta.navigate(['administrador/guia2-result', ide]);
  }

}
