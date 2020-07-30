import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { InfoTrabajador } from 'src/app/interfaces/info-trabajador.interfce';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';

@Component({
  selector: 'app-trabajadores-edit',
  templateUrl: './trabajadores-edit.component.html',
  styleUrls: ['./trabajadores-edit.component.sass']
})
export class TrabajadoresEditComponent {

// *********************** DECLARACION DE VARIABLES ************************

  trabajador: InfoTrabajador= {};
  formEditTrabajador: FormGroup;
  campox: string;

// *********************** CONSTRUCTOR ************************

  constructor( public infoTrabajadorService: InfoTrabajadorService,
               private ruta: Router,
               private fb: FormBuilder,
               private activatedRoute: ActivatedRoute ) {

                this.cargarTrabajador();
                this.editarFormulario();
                }

// *************************** EDIT ****************************

cargarTrabajador(){
  this.activatedRoute.params.subscribe(params => {
    this.infoTrabajadorService.getTrabajador(params.id).subscribe(
      data => {
           this.trabajador = data ;
         }, (err) => {
           console.log('Error al cargar:' + err);
         }
       );
  });
 }

actualizarEditTrabajador(){

    this.infoTrabajadorService.actualizarTrabajador(this.trabajador)
    .pipe(first())
    .subscribe(data => {
        this.trabajador = data;
        console.log(this.trabajador);
        this.ruta.navigate(['/trabajadores']);
    }, error => {
          console.log('error en la modificación del trabajador:' + error.message);
    });
  }

// *************************** VALIDACION FORM ****************************

editarFormulario() {
  this.formEditTrabajador = this.fb.group({
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
  return this.formEditTrabajador.get('nombre').invalid && this.formEditTrabajador.get('nombre').touched;
}
get telefonoNoValido() {
  return this.formEditTrabajador.get('telefono').invalid && this.formEditTrabajador.get('telefono').touched;
}
get emailNoValido() {
  return this.formEditTrabajador.get('email').invalid && this.formEditTrabajador.get('email').touched;
}
get sexoNoValido() {
  return this.formEditTrabajador.get('sexo').invalid && this.formEditTrabajador.get('sexo').touched;
}


// ************************** RUTAS *****************************

irListado() {
  this.ruta.navigate(['/trabajadores']);
}



}
