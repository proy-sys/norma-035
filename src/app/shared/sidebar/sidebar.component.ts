import { Component, OnInit } from '@angular/core';
import { InfoTrabajadorService } from '../../services/info-trabajador.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  numeroTrabajadores: any;
  constructor(public infoTrabajadorService: InfoTrabajadorService
    ) {
      this.cargarNumTrabajadores();
     }

     cargarNumTrabajadores(){
    this.infoTrabajadorService.getTotalTrabajadores().subscribe(
      data => {
          this.numeroTrabajadores = data;
        }, (err) => {
          console.log('Hubo un error:' + err);
        }
      );
  }

}
