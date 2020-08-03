import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { InfoDocumento } from 'src/app/interfaces/info-documento.interface';
import { InfoTrabajador } from 'src/app/interfaces/info-trabajador.interfce';
import { InfoDocumentoService } from 'src/app/services/info-documento.service';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';

@Component({
  selector: 'app-documentos-upload',
  templateUrl: './documentos-upload.component.html'
})
export class DocumentosUploadComponent implements OnInit {

// *********************** DECLARACION DE VARIABLES ************************

  documento: InfoDocumento;
  formUploadDocumento: FormGroup;
  trabajadores: Array<InfoTrabajador>;

  // *********************** DECLARACION DE VARIABLES DE MODAL ************************
  title = 'appBootstrap';
  closeResult: string;

  constructor( private infoDocumentoService: InfoDocumentoService,
               private infoTrabajadorService: InfoTrabajadorService,
               private activatedRoute: ActivatedRoute,
               private ruta: Router,
               private modalService: NgbModal )
     { }

  ngOnInit(): void {
    this.listarTrabajadores();
    this.crearFormulario();
  }

  listarTrabajadores() {
    this.infoTrabajadorService.getListadotrabajadores().subscribe(
      data => {
        this.trabajadores = data;
      }
    );
  }

  // *************************** EDIT ****************************

crearFormulario(){
  this.activatedRoute.params.subscribe(params => {
    this.infoDocumentoService.getDocumento(params.id).subscribe(
      data => {
           this.documento = data;
         }, (err) => {
           console.log('Error al cargar:' + err);
         }
       );
  });
 }

  guardarUploadDocumento() {
    console.log('si');
  }

  irUpload(ide: number) {
    console.log(ide);
    // this.ruta.navigate(['/documentosupload', ide]);
  }

  irListado() {
    this.ruta.navigate(['administrador/documentos']);
  }

  // *************************** FUNCIONES MODAL ****************************
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = 'Closed with: ${result}';
    }, (reason) => {
      this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
    });
  }

   private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  'with: ${reason}';
    }
  }
}
