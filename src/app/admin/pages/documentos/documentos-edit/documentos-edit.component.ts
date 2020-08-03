import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InfoDocumento } from 'src/app/interfaces/info-documento.interface';
import { InfoTrabajador } from 'src/app/interfaces/info-trabajador.interfce';
import { InfoDocumentoService } from 'src/app/services/info-documento.service';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';


@Component({
  selector: 'app-documentos-edit',
  templateUrl: './documentos-edit.component.html',
})
export class DocumentosEditComponent {

  documento: InfoDocumento;
  formEditDocumento: FormGroup;
  trabajadores: Array<InfoTrabajador>;

  constructor( private infoDocumentoService: InfoDocumentoService,
               private infoTrabajadorService: InfoTrabajadorService,
               private ruta: Router,
               private activatedRoute: ActivatedRoute,
               private fb: FormBuilder )
    {
      this.crearFormulario();
      this.editarFormulario();
      this.listarTrabajadores();
    }

  // ********************** LISTAR TRABAJADORES **********************

listarTrabajadores() {

  this.infoTrabajadorService.getListadotrabajadores().subscribe(
     data => {
    this.trabajadores = data;
  });
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

 guardarEditDocumento() {
  if ( this.formEditDocumento.invalid) {
    return Object.values(this.formEditDocumento.controls).forEach( control => {
      control.markAsTouched();
    });
  } else {

    this.infoDocumentoService.actualizarDocumento(this.documento)
    .subscribe(data => {

      this.ruta.navigate(['administrador/documentos']);
    }, error => {
        console.log('error al dar de alta al documento:' + error.message);
    });
  }
}

// *************************** VALIDACION FORM ****************************

onClick() {
  console.log('asdfasdf');
}

editarFormulario() {
  this.formEditDocumento = this.fb.group({
    nombre: ['', Validators.required],
    tipo: ['', Validators.required],
    fecha: ['', Validators.required],
    responsable_id: ['', Validators.required],
    trabajadores: [''],
    status: ['true']
  });
}

get tipoNoValido() {
  return this.formEditDocumento.get('tipo').invalid && this.formEditDocumento.get('tipo').touched;
}

get nombreNoValido() {
  return this.formEditDocumento.get('nombre').invalid && this.formEditDocumento.get('nombre').touched;
}

get fechaNoValido() {
  return this.formEditDocumento.get('fecha').invalid && this.formEditDocumento.get('fecha').touched;
}

get responsableNoValido() {
   return this.formEditDocumento.get('responsable_id').invalid && this.formEditDocumento.get('responsable_id').touched;
}

// *************************** RUTAS ****************************

  irListado() {
    this.ruta.navigate(['administrador/documentos']);
  }

}
