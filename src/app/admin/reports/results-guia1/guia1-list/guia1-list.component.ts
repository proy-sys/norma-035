import { Component, OnInit } from '@angular/core';
import { InfoTrabajadorService } from '../../../../services/info-trabajador.service';
import { InfoTrabajador } from '../../../../interfaces/info-trabajador.interfce';
import { Router, ActivatedRoute } from '@angular/router';
import { InfoGuiasService } from '../../../../services/info-guias.service';

@Component({
  selector: 'app-guia1-list',
  templateUrl: './guia1-list.component.html',
  styleUrls: ['./guia1-list.component.sass']
})
export class Guia1ListComponent {

  listaTrabajadores: any = [];
  listaRespuestas: any = [];

  constructor(private infoGuiasService: InfoGuiasService,
              private infoTrabajadorService: InfoTrabajadorService,
              private ruta: Router
    ) {
      this.listadoTrabajadores();
      this.respuestas();
    }

  // listadoTrabajadores() {
  //   this.infoTrabajadorService.getListadotrabajadores().subscribe(
  //     data => {
  //       this.listaTrabajadores = data;
  //     }
  //   );
  // }

  listadoTrabajadores() {
    this.infoTrabajadorService.getListadotrabajadores().subscribe(
      data => {
        this.listaTrabajadores = data;
      }
    );
  }

  respuestas() {
    this.infoGuiasService.getGuia(1).subscribe(
      data => {
        this.listaRespuestas = data;
        console.log(this.listaRespuestas);
      }
    );
  }


  // ************************** RUTAS *****************************
  verResult(ide: number) {
    this.ruta.navigate(['administrador/guia1-result', ide]);
  }

  imprimir(){
    window.print();
  }

}
