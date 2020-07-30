import { Component, OnInit } from '@angular/core';
import { InfoSugerenciaQuejaService } from 'src/app/services/info-sugerencia-queja.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';
import { InfoTrabajador } from 'src/app/interfaces/info-trabajador.interfce';

@Component({
  selector: 'app-sugerencias-add',
  templateUrl: './sugerencias-add.component.html',
  styleUrls: ['./sugerencias-add.component.sass']
})
export class SugerenciasAddComponent implements OnInit {

  formAddQuejaSugerencia: FormGroup;
  listaTrabajadores = new Array<InfoTrabajador>();

  constructor( public infoSugerenciaQuejaService: InfoSugerenciaQuejaService,
               private ruta: Router,
               private fb: FormBuilder,
               public infoTrabajadorService: InfoTrabajadorService
               ){ 
                   this.crearFormulario();
                   this.listarTrabajadores();
                }

  ngOnInit(): void {

  }

  listarTrabajadores(){
    this.infoTrabajadorService. getListadotrabajadores().subscribe(
      data => {
          this.listaTrabajadores = data;
        }
      );
   }
  crearFormulario() {
    this.formAddQuejaSugerencia = this.fb.group({
         descripcion: ['', Validators.required],
         status: ['false'],
         tipo: ['', Validators.required],
         trabajador_id: ['', Validators.required],

    });
  }

  guardarAddSugerenciaQueja() {

    if ( this.formAddQuejaSugerencia.invalid) {
        return Object.values(this.formAddQuejaSugerencia.controls).forEach( control => {
           control.markAsTouched();
      });
    } else {
      this.infoSugerenciaQuejaService.crearQuejaSugerencia(this.formAddQuejaSugerencia.value)
    .subscribe(data => {
        this.ruta.navigate(['/sugerencias']);
    }, error => {
          console.log('error al dar de alta la queja y/o sugerencia:' + error.message);
    });
    }
  }
  irListado() {
    this.ruta.navigate(['/sugerencias']);
  }
  get descripcionNoValido() {
     return this.formAddQuejaSugerencia.get('descripcion').invalid && this.formAddQuejaSugerencia.get('descripcion').touched;
   }
  get tipoNoValido() {
    return this.formAddQuejaSugerencia.get('tipo').invalid && this.formAddQuejaSugerencia.get('tipo').touched;
  }
  get trabajador_idNoValido() {
    return this.formAddQuejaSugerencia.get('trabajador_id').invalid && this.formAddQuejaSugerencia.get('trabajador_id').touched;
  }
}
