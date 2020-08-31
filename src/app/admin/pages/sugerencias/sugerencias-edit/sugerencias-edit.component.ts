import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InfoSugerenciaQueja } from 'src/app/interfaces/info-sugerencia-queja.interface.';
import { InfoSugerenciaQuejaService } from 'src/app/services/info-sugerencia-queja.service';

@Component({
  selector: 'app-sugerencias-edit',
  templateUrl: './sugerencias-edit.component.html',
  styleUrls: ['./sugerencias-edit.component.sass']
})
export class SugerenciasEditComponent {

  formEditQuejaSugerencia: FormGroup;
  sugerencia: InfoSugerenciaQueja = {};
  estat: number;

  constructor(public infoSugerenciaQuejaService: InfoSugerenciaQuejaService,
              private ruta: Router,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder
    ) {
      this.crearFormulario();
      this.editarFormulario();
     }


    crearFormulario(){
      this.activatedRoute.params.subscribe(params => {
        this.infoSugerenciaQuejaService.getQueja_Sugerencia(params.id).subscribe(
          data => {
               this.sugerencia = data;
               this.sugerencia.estatus = this.sugerencia.estatus + 1;
             }, (err) => {
               console.log('Error al cargar:' + err);
             }
           );
      });
     }

     guardarEditSugerenciaQueja() {
      console.log(this.formEditQuejaSugerencia.value);
      if ( this.formEditQuejaSugerencia.invalid) {
        return Object.values(this.formEditQuejaSugerencia.controls).forEach( control => {
          control.markAsTouched();
        });
      } else {
        this.infoSugerenciaQuejaService.actualizarSugerencia(this.sugerencia)
        .subscribe(data => {
          this.ruta.navigate(['administrador/sugerencias']);
        }, error => {
            console.log('error al actualizar la sugerencia:' + error.message);
        });
      }
    }

  editarFormulario() {
    this.formEditQuejaSugerencia = this.fb.group({
      status: [''],
      en_proceso: [''],
      conclusion: [''],
      estatus: ['']
    });
  }
  get en_procesoNoValido() {
    return this.formEditQuejaSugerencia.get('en_proceso').invalid && this.formEditQuejaSugerencia.get('en_proceso').touched;
  }

  irListado() {
    this.ruta.navigate(['administrador/sugerencias']);
  }

}
