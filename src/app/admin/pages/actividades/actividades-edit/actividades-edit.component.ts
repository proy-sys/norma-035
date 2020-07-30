import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InfoActividad } from 'src/app/interfaces/info-actividad.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InfoTrabajador } from 'src/app/interfaces/info-trabajador.interfce';
import { InfoActividadService } from 'src/app/services/info-actividad.service';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';


@Component({
  selector: 'app-actividades-edit',
  templateUrl: './actividades-edit.component.html'
})
export class ActividadesEditComponent {

// *********************** DECLARACION DE VARIABLES ************************
  actividad: InfoActividad = {};
  formEditActividad: FormGroup;
  trabajadores: Array<InfoTrabajador>;
  srcImagen1: string;
  srcImagen2: string;

// *********************** CONSTRUCTOR ************************

  constructor( private infoActividadService: InfoActividadService,
               private infoTrabajadorService: InfoTrabajadorService,
               private ruta: Router,
               private activatedRoute: ActivatedRoute,
               private fb: FormBuilder) {

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
    this.infoActividadService.getActividad(params.id).subscribe(
      data => {
           this.actividad = data;
           this.srcImagen1 = this.actividad.imagen1;
           this.srcImagen2 = this.actividad.imagen2;
         }, (err) => {
           console.log('Error al cargar:' + err);
         }
       );
  });
 }

formatoImagen1(event: any): void {
   if (event.target.files && event.target.files[0]) {
     const reader = new FileReader();

     reader.onload = (event: any) => {
       this.srcImagen1 = event.target.result;
     },
     reader.readAsDataURL(event.target.files[0]);
     this.srcImagen1 = event.target.files[0];
     document.getElementById('imagen1').innerHTML = event.target.files[0].name;
    }
}

formatoImagen2(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
       this.srcImagen2 = event.target.result;
      },
      reader.readAsDataURL(event.target.files[0]);
      this.srcImagen2 = event.target.files[0];
      document.getElementById('imagen2').innerHTML = event.target.files[0].name;
}
}

getBase64Image(img, x, y) {
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, x, y);
  const dataURL = canvas.toDataURL();
  return dataURL;
}

guardarEditActividad() {
  if ( this.formEditActividad.invalid) {
    return Object.values(this.formEditActividad.controls).forEach( control => {
      control.markAsTouched();
    });
  } else {

    this.actividad.imagen1 = this.getBase64Image(document.getElementById('imagen1x'), 200, 170);
    this.actividad.imagen2 = this.getBase64Image(document.getElementById('imagen2x'), 200, 170);

    this.infoActividadService.actualizarActividad(this.actividad)
    .subscribe(data => {

      this.ruta.navigate(['/actividades']);
    }, error => {
        console.log('error al dar de alta al actividad:' + error.message);
    });
  }
}

// *************************** VALIDACION FORM ****************************

editarFormulario() {
  this.formEditActividad = this.fb.group({
    nombre: ['', Validators.required],
    tipo: ['', Validators.required],
    fecha: ['', Validators.required],
    responsable_id: ['', Validators.required],
    imagen1: [''],
    imagen2: [''],
    status: ['true']
  });
}

get tipoNoValido() {
  return this.formEditActividad.get('tipo').invalid && this.formEditActividad.get('tipo').touched;
}

get nombreNoValido() {
  return this.formEditActividad.get('nombre').invalid && this.formEditActividad.get('nombre').touched;
}

get fechaNoValido() {
  return this.formEditActividad.get('fecha').invalid && this.formEditActividad.get('fecha').touched;
}

get responsableNoValido() {
   return this.formEditActividad.get('responsable_id').invalid && this.formEditActividad.get('responsable_id').touched;
}

// *************************** RUTAS ****************************

irListado() {
  this.ruta.navigate(['/actividades']);
}

}
