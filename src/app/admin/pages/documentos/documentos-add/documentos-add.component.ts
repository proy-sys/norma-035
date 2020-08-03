import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InfoDocumento } from 'src/app/interfaces/info-documento.interface';
import { InfoTrabajador } from 'src/app/interfaces/info-trabajador.interfce';
import { InfoDocumentoService } from 'src/app/services/info-documento.service';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';

@Component({
  selector: 'app-documentos-add',
  templateUrl: './documentos-add.component.html'
})
export class DocumentosAddComponent {

  // *********************** DECLARACION DE VARIABLES ************************

documento: InfoDocumento = {};
formAddDocumento: FormGroup;
trabajadores: Array<InfoTrabajador>;
tip: number;

// *********************** CONSTRUCTOR ************************

  constructor( private infoDocumentoService: InfoDocumentoService,
               private infoTrabajadorService: InfoTrabajadorService,
               private ruta: Router,
               private fb: FormBuilder

    ) {
      this.crearFromulario();
      this.listarTrabajadores();
     }

// ********************** LISTAR TRABAJADORES **********************

listarTrabajadores() {
  this.infoTrabajadorService.getListadotrabajadores().subscribe(
    data => {
      this.trabajadores = data;
    }
  );
}

// ****************************** ADD *******************************

guardarAddDocumento() {
  if ( this.formAddDocumento.invalid) {
    return Object.values(this.formAddDocumento.controls).forEach( control => {
      control.markAsTouched();
    });
  } else {

    this.infoDocumentoService.crearDocumento(this.formAddDocumento.value)
  .subscribe(data => {
      this.ruta.navigate(['administrador/documentos']);
  }, error => {
        console.log('error al dar de alta al actividad:' + error.message);
  });
  }
}

// *************************** VALIDACION FORM ****************************

// selectTipo(event: any): void {
//   this.tip = event;
// }

onClick() {
  console.log('asdfasdf');
}

crearFromulario() {
  this.formAddDocumento = this.fb.group({
    nombre: ['', Validators.required],
    tipo: ['', Validators.required],
    fecha: ['', Validators.required],
    responsable_id: ['', Validators.required],
    trabajadores: [''],
    status: ['true']
  });
}

get tipoNoValido() {
  return this.formAddDocumento.get('tipo').invalid && this.formAddDocumento.get('tipo').touched;
}

get nombreNoValido() {
  return this.formAddDocumento.get('nombre').invalid && this.formAddDocumento.get('nombre').touched;
}

get fechaNoValido() {
  return this.formAddDocumento.get('fecha').invalid && this.formAddDocumento.get('fecha').touched;
}

get responsableNoValido() {
   return this.formAddDocumento.get('responsable_id').invalid && this.formAddDocumento.get('responsable_id').touched;
}

// *************************** RUTAS ****************************

irListado() {
  this.ruta.navigate(['administrador/documentos']);
}

}
