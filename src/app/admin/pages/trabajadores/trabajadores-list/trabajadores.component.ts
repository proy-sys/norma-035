import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { InfoTrabajador } from 'src/app/interfaces/info-trabajador.interfce';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {

  listaTrabajadores =  new Array<InfoTrabajador>();
  closeResult: string;

  constructor( public infoTrabajadorService: InfoTrabajadorService,
               private ruta: Router) { }

  ngOnInit(): void {
    this.listarTrabajadores();
  }

  listarTrabajadores(){
    this.infoTrabajadorService.getListadotrabajadores().subscribe(
      data => {
          this.listaTrabajadores = data;
        }
      );
  }

  eliminar_trabajador(id: number, nombre: string): void {
    Swal.fire({
         title: 'Eliminar trabajador',
         text: '¿Esta seguro que desea eliminar el trabajador:' + nombre + '?',
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Si, eliminar!',
         cancelButtonText: 'Cancelar'
    }).then( result => {
        if (result.value){

          this.infoTrabajadorService.deleteTrabajador(id).subscribe(
            data => {
              this.ngOnInit();
             }, (err) => {
                console.log('Hubo un error al Eliminar el trabajador => ' + err.toString());
             });

          Swal.fire('Eliminado', 'Se ha eliminado el trabajador: ' + nombre, 'success');
        }
    });
  }

  irEditar(ide: number) {
    this.ruta.navigate(['/trabajadoresedit', ide]);
  }

}
