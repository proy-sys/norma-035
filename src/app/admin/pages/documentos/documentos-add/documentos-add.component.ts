import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InfoDocumento } from 'src/app/interfaces/info-documento.interface';
import { InfoTrabajador } from 'src/app/interfaces/info-trabajador.interfce';
import { InfoDocumentoService } from 'src/app/services/info-documento.service';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';
import { ToastrService } from 'ngx-toastr';
import { InfoEmpresaService } from 'src/app/services/info-empresa.service';
import { InfoEmpresa } from 'src/app/interfaces/info-empresa.interface';

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
empresa: InfoEmpresa = {};

// *********************** CONSTRUCTOR ************************

  constructor( private infoDocumentoService: InfoDocumentoService,
               private infoTrabajadorService: InfoTrabajadorService,
               private ruta: Router,
               private fb: FormBuilder,
               private toastr: ToastrService,
               private infoEmpresaService: InfoEmpresaService,

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
      this.toastr.success('succesful' , 'el documento se agrego correctamente');
      this.ruta.navigate(['administrador/documentos']);
    }, error => {
          console.log('error al agregar el documento:' + error.message);
          this.toastr.error('error al agregar el documento' + error.message);
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

  this.infoEmpresaService.obtenerEmpresa().subscribe(
    data => {
        this.empresa = data;
      }, (err) => {
        console.log('Hubo un error:' + err);
      }
    );

  this.formAddDocumento = this.fb.group({
    nombre: ['', Validators.required],
    tipo: ['', Validators.required],
    fecha: ['', Validators.required],
    responsable_id: ['', Validators.required],
    trabajadores: [''],
    empresa_id: [''],
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
