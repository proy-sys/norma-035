import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { InfoDocumento } from 'src/app/interfaces/info-documento.interface';
import { InfoDocumentoService } from 'src/app/services/info-documento.service';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html'
})
export class DocumentosComponent implements OnInit {

  documentos: Array<InfoDocumento>;
  trabajador: string;

  constructor( private infoDocumentoService: InfoDocumentoService,
               private infoTrabajadorService: InfoTrabajadorService,
               private ruta: Router )
    { }

  ngOnInit(): void {

    this.listarDocumentos();

  }

  listarDocumentos() {
    this.infoDocumentoService.getListadodocumentos().subscribe(
      data => {
        this.documentos = data;
        console.log(this.documentos);
        // this.infoTrabajadorService.getTrabajador(this.documentos['responsable_id']).subscribe(
        //  data2 => {
        //       this.trabajador = data2;
        //       console.log(this.trabajador);
        //  });
      });
  }
  eliminarDocumento(id: number, nombre: string){
    Swal.fire({
      title: 'Eliminar documento',
      text: '¿Esta seguro que desea eliminar el documento:' + nombre + '?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
 }).then( result => {
     if (result.value){

       this.infoDocumentoService.deleteDocumento(id).subscribe(
         data => {
           this.ngOnInit();
          }, (err) => {
             console.log('Hubo un error al eliminar el documento => ' + err.toString());
          });

       Swal.fire('Eliminado', 'Se ha eliminado el documento: ' + nombre, 'success');
     }
 });
  }
  irUpload(ide: number) {
    this.ruta.navigate(['administrador/documentosupload', ide]);
  }

  irEditar(ide: number) {
    this.ruta.navigate(['administrador/documentosedit', ide]);
  }

  irDocumentosadd(){
    this.ruta.navigate(['administrador/documentosadd']);
  }

}
