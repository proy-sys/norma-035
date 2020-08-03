import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InfoTrabajador } from 'src/app/interfaces/info-trabajador.interfce';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';

@Component({
  selector: 'app-trabajadores-add',
  templateUrl: './trabajadores-add.component.html',
  styleUrls: ['./trabajadores-add.component.sass']
})
export class TrabajadoresAddComponent {

// *********************** DECLARACION DE VARIABLES ************************

  trabajador: InfoTrabajador = {};
  formAddTrabajador: FormGroup;
  campox: string;

// *********************** CONSTRUCTOR ************************

  constructor( public infoTrabajadorService: InfoTrabajadorService,
               private ruta: Router,
               private fb: FormBuilder ) {

                this.crearFormulario();

                }

// *************************** ADD ****************************

guardarAddTrabajador() {
  console.log(this.formAddTrabajador);
  if ( this.formAddTrabajador.invalid) {
    return Object.values(this.formAddTrabajador.controls).forEach( control => {
      control.markAsTouched();
    });
  } else {
    this.infoTrabajadorService.crearTrabajador(this.formAddTrabajador.value)
  .subscribe(data => {

      // console.log(data);
      this.ruta.navigate(['administrador/trabajadores']);
  }, error => {
        console.log('error al dar de alta al trabajador:' + error.message);
  });
  }

}

// *************************** VALIDACION FORM ****************************

crearFormulario() {
  this.formAddTrabajador = this.fb.group({
    nombre: ['', Validators.required],
    telefono: ['', [ Validators.required, Validators.minLength(10) ] ],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    curp: [''],
    direccion: [''],
    sexo: ['', Validators.required],
    edad: [''],
    estado_civil: [''],
    nivel_estudios: [''],
    ocupacion: [''],
    departamento: [''],
    tipo_puesto: [''],
    tipo_contrato: [''],
    tipo_personal: [''],
    jornada_trabajo: [''],
    rotacion_turnos: [''],
    experiencia: [''],
    tiempo_puesto_actual: [''],
    tiempo_experiencia: [''],
    empresa_id: ['1'],
    status: ['true'],
    nivel_estudios_status: ['']
  });
}

get nombreNoValido() {
  return this.formAddTrabajador.get('nombre').invalid && this.formAddTrabajador.get('nombre').touched;
}
get telefonoNoValido() {
  return this.formAddTrabajador.get('telefono').invalid && this.formAddTrabajador.get('telefono').touched;
}
get emailNoValido() {
  return this.formAddTrabajador.get('email').invalid && this.formAddTrabajador.get('email').touched;
}
get sexoNoValido() {
  return this.formAddTrabajador.get('sexo').invalid && this.formAddTrabajador.get('sexo').touched;
}

// ************************** RUTAS *****************************

irListado() {
  this.ruta.navigate(['administrador/trabajadores']);
}

}
