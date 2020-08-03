import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { InfoActividad } from 'src/app/interfaces/info-actividad.interface';
import { InfoTrabajador } from 'src/app/interfaces/info-trabajador.interfce';
import { InfoActividadService } from 'src/app/services/info-actividad.service';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html'
})
export class ActividadesComponent implements OnInit {

  actividades: Array<InfoActividad>;
  trabajadores: Array<InfoTrabajador>;

  constructor( private infoActividadService: InfoActividadService,
               private infoTrabajadorService: InfoTrabajadorService,
               private ruta: Router )
  { }

  ngOnInit(): void {
    this.listarActividades();
    this.listarTrabajadores();
  }

  listarActividades() {
    this.infoActividadService.getListadoactividades().subscribe(
      data => {
        this.actividades = data;
      });
  }

  listarTrabajadores(){
    this.infoTrabajadorService.getListadotrabajadores().subscribe(
      data => {
          this.trabajadores = data;
        }
      );
  }
  eliminar_actividad(id: number, nombre: string): void {
    Swal.fire({
         title: 'Eliminar actividad',
         text: '¿Esta seguro que desea eliminar la actividad:' + nombre + '?',
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Si, eliminar!',
         cancelButtonText: 'Cancelar'
    }).then( result => {
        if (result.value){

          this.infoActividadService.deleteActividad(id).subscribe(
            data => {
              this.ngOnInit();
             }, (err) => {
                console.log('Hubo un error al eliminar la actividad => ' + err.toString());
             });

          Swal.fire('Eliminado', 'Se ha eliminado la actividad: ' + nombre, 'success');
        }
    });
  }
  irEditar(ide: number) {
    this.ruta.navigate(['administrador/actividadesedit', ide]);
  }
  irActividadesadd(){
    this.ruta.navigate(['administrador/actividadesadd']);
  }

}
