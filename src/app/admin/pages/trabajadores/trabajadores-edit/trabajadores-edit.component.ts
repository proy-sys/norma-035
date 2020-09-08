import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { InfoTrabajador } from 'src/app/interfaces/info-trabajador.interfce';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';
import { InfoEmpresaService } from 'src/app/services/info-empresa.service';
import { InfoEmpresa } from 'src/app/interfaces/info-empresa.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trabajadores-edit',
  templateUrl: './trabajadores-edit.component.html',
  styleUrls: ['./trabajadores-edit.component.sass']
})
export class TrabajadoresEditComponent {

// *********************** DECLARACION DE VARIABLES ************************

  trabajador: InfoTrabajador = {};
  formEditTrabajador: FormGroup;
  campox: string;
  empresa: InfoEmpresa = {};

// *********************** CONSTRUCTOR ************************

  constructor( public infoTrabajadorService: InfoTrabajadorService,
               private ruta: Router,
               private fb: FormBuilder,
               private activatedRoute: ActivatedRoute,
               private infoEmpresaService: InfoEmpresaService,
               private toastr: ToastrService) {

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

  if ( this. formEditTrabajador.invalid) {
    return Object.values(this. formEditTrabajador.controls).forEach( control => {
      control.markAsTouched();
    });
  }else{
    this.infoTrabajadorService.actualizarTrabajador(this.trabajador)
    .pipe(first())
    .subscribe(data => {
        this.toastr.success('succesful' , 'el trabajador se actualizo correctamente');
        this.trabajador = data;
        this.ruta.navigate(['administrador/trabajadores']);
    }, error => {
          console.log('error en la modificación del trabajador:' + error.message);
          this.toastr.error('error al actualizar el trabajador' , error.message);
    });
   }
  }

// *************************** VALIDACION FORM ****************************

editarFormulario() {
  this.infoEmpresaService.obtenerEmpresa().subscribe(
    data => {
        this.empresa = data;
        console.log(this.empresa.id);
      }, (err) => {
        console.log('Hubo un error:' + err);
      }
    );
  this.formEditTrabajador = this.fb.group({
    nombre: ['', Validators.required],
    telefono: ['', [ Validators.required, Validators.minLength(10) ] ],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    curp: ['', Validators.required],
    direccion: ['', Validators.required],
    sexo: ['', Validators.required],
    edad: ['' , Validators.required],
    estado_civil: ['', Validators.required],
    nivel_estudios: ['' , Validators.required],
    ocupacion: ['', Validators.required],
    departamento: ['', Validators.required],
    tipo_puesto: ['', Validators.required],
    tipo_contrato: [''],
    tipo_personal: [''],
    jornada_trabajo: [''],
    rotacion_turnos: [''],
    experiencia: [''],
    tiempo_puesto_actual: [''],
    tiempo_experiencia: [''],
    empresa_id: [''],
    status: ['true'],
    nivel_estudios_status: ['', Validators.required]
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
get curpNoValido() {
  return this.formEditTrabajador.get('curp').invalid && this.formEditTrabajador.get('curp').touched;
}
get direccionNoValido() {
  return this.formEditTrabajador.get('direccion').invalid && this.formEditTrabajador.get('direccion').touched;
}
get edadNoValido() {
  return this.formEditTrabajador.get('edad').invalid && this.formEditTrabajador.get('edad').touched;
}
get estadoCivilNoValido() {
  return this.formEditTrabajador.get('estado_civil').invalid && this.formEditTrabajador.get('estado_civil').touched;
}
get nivelEstudiosNoValido() {
  return this.formEditTrabajador.get('nivel_estudios').invalid && this.formEditTrabajador.get('nivel_estudios').touched;
}
get ocupacionNoValido() {
  return this.formEditTrabajador.get('ocupacion').invalid && this.formEditTrabajador.get('ocupacion').touched;
}
get departamentoNoValido() {
  return this.formEditTrabajador.get('departamento').invalid && this.formEditTrabajador.get('departamento').touched;
}
get tipoPuestoNoValido() {
  return this.formEditTrabajador.get('tipo_puesto').invalid && this.formEditTrabajador.get('tipo_puesto').touched;
}
get tipoContratoNoValido() {
  return this.formEditTrabajador.get('tipo_contrato').invalid && this.formEditTrabajador.get('tipo_contrato').touched;
}

get tipoPersonalNoValido() {
  return this.formEditTrabajador.get('tipo_personal').invalid && this.formEditTrabajador.get('tipo_personal').touched;
}

get jornadaTrabajoNoValido() {
  return this.formEditTrabajador.get('jornada_trabajo').invalid && this.formEditTrabajador.get('jornada_trabajo').touched;
}
get experienciaNoValido() {
  return this.formEditTrabajador.get('rotacion_turnos').invalid && this.formEditTrabajador.get('rotacion_turnos').touched;
}
get RotacionTurnosValido() {
  return this.formEditTrabajador.get('experiencia').invalid && this.formEditTrabajador.get('experiencia').touched;
}
get TiempoPuestoActualNoValido() {
  return this.formEditTrabajador.get('tiempo_puesto_actual').invalid && this.formEditTrabajador.get('tiempo_puesto_actual').touched;
}
get TiempoExperiencialNoValido() {
  return this.formEditTrabajador.get('tiempo_experiencia').invalid && this.formEditTrabajador.get('tiempo_experencia').touched;
}
get nivelEstudiosStatusNoValido() {
  return this.formEditTrabajador.get('nivel_estudios_status').invalid && this.formEditTrabajador.get('nivel_estudios_status').touched;
}




// ************************** RUTAS *****************************

irListado() {
  this.ruta.navigate(['administrador/trabajadores']);
}



}
