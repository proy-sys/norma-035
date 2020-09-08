import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InfoTrabajador } from 'src/app/interfaces/info-trabajador.interfce';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';
import { ToastrService } from 'ngx-toastr';
import { InfoEmpresaService } from 'src/app/services/info-empresa.service';
import { InfoEmpresa } from 'src/app/interfaces/info-empresa.interface';

@Component({
  selector: 'app-trabajadores-add',
  templateUrl: './trabajadores-add.component.html',
  styleUrls: ['./trabajadores-add.component.sass']
})
export class TrabajadoresAddComponent  implements OnInit {

// *********************** DECLARACION DE VARIABLES ************************

  trabajador: InfoTrabajador = {};
  formAddTrabajador: FormGroup;
  campox: string;
  empresa: InfoEmpresa = {};

// *********************** CONSTRUCTOR ************************

  constructor( private infoTrabajadorService: InfoTrabajadorService,
               private infoEmpresaService: InfoEmpresaService,
               private ruta: Router,
               private fb: FormBuilder,
               private toastr: ToastrService) {

  }

  ngOnInit(): void {


    this.infoEmpresaService.obtenerEmpresa().subscribe(
      data => {
          this.empresa = data;
          console.log(this.empresa.id);
        }, (err) => {
          console.log('Hubo un error:' + err);
        }
      );

    this.formAddTrabajador = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', [ Validators.required, Validators.minLength(10) ] ],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      curp: ['', Validators.required],
      direccion: ['', Validators.required],
      sexo: ['', Validators.required],
      edad: ['', Validators.required],
      estado_civil: ['', Validators.required],
      nivel_estudios: ['', Validators.required],
      ocupacion: ['', Validators.required],
      departamento: ['', Validators.required],
      tipo_puesto: [''],
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

// *************************** ADD ****************************


guardarAddTrabajador() {
  if ( this.formAddTrabajador.invalid) {
    return Object.values(this.formAddTrabajador.controls).forEach( control => {
      control.markAsTouched();
    });
  } else {
    this.infoTrabajadorService.crearTrabajador(this.formAddTrabajador.value)
      .subscribe(data => {

     this.toastr.success('succesful' , 'el trabajador se agrego correctamente');
     this.ruta.navigate(['administrador/trabajadores']);
   }, error => {
         console.log('error al dar de alta al trabajador:' + error.message);
         this.toastr.error('error al agregar el trabajador' , error.message);
   });
  }
}

// *************************** VALIDACION FORM ****************************

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
get curpNoValido() {
  return this.formAddTrabajador.get('curp').invalid && this.formAddTrabajador.get('curp').touched;
}
get direccionNoValido() {
  return this.formAddTrabajador.get('direccion').invalid && this.formAddTrabajador.get('direccion').touched;
}
get nivelEstudiosNoValido() {
  return this.formAddTrabajador.get('nivel_estudios').invalid && this.formAddTrabajador.get('nivel_estudios').touched;
}
get ocupacionNoValido() {
  return this.formAddTrabajador.get('ocupacion').invalid && this.formAddTrabajador.get('ocupacion').touched;
}
get departamentoNoValido() {
  return this.formAddTrabajador.get('departamento').invalid && this.formAddTrabajador.get('departamento').touched;
}
get nivelEstudiosStatusNoValido() {
  return this.formAddTrabajador.get('nivel_estudios_status').invalid && this.formAddTrabajador.get('nivel_estudios_status').touched;
}
get edadNoValido() {
  return this.formAddTrabajador.get('edad').invalid && this.formAddTrabajador.get('edad').touched;
}
get estadoCivilNoValido() {
  return this.formAddTrabajador.get('estado_civil').invalid && this.formAddTrabajador.get('estado_civil').touched;
}

// ************************** RUTAS *****************************

irListado() {
  this.ruta.navigate(['administrador/trabajadores']);
}

}
