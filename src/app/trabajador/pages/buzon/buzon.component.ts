import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InfoSugerenciaQuejaService } from 'src/app/services/info-sugerencia-queja.service';
import { InfoAuthenticationService } from 'src/app/services/info-authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buzon',
  templateUrl: './buzon.component.html',
  styleUrls: ['./buzon.component.sass']
})
export class BuzonComponent implements OnInit {
  formAddQuejaSugerencia: FormGroup;

  constructor(private ruta: Router,
              public infoSugerenciaQuejaService: InfoSugerenciaQuejaService,
              private fb: FormBuilder,
              private servicio: InfoAuthenticationService,
              private toastr: ToastrService,
              ) {}

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formAddQuejaSugerencia = this.fb.group({
         descripcion: ['', Validators.required],
         status: ['false'],
         tipo: ['', Validators.required],
         trabajador_id: this.servicio.getCurrentUser().user.id,
         estatus: [0]
    });
  }

  irFinalizar(){
      this.ruta.navigate(['trabajador/finalizar']);
  }

  guardarAddSugerenciaQueja() {

   if ( this.formAddQuejaSugerencia.invalid) {
        return Object.values(this.formAddQuejaSugerencia.controls).forEach( control => {
           control.markAsTouched();
      });
    } else {
      this.infoSugerenciaQuejaService.crearQuejaSugerencia(this.formAddQuejaSugerencia.value)
    .subscribe(data => {
           if ( data === 200){
               this.toastr.success('Succesful' , 'Se ha registrado correctamente');
               this.ruta.navigate(['trabajador/finalizar']);
           }
    }, error => {
          console.log('error al dar de alta la queja y/o sugerencia:' + error.message);
    });
    }
  }

   get descripcionNoValido() {
      return this.formAddQuejaSugerencia.get('descripcion').invalid && this.formAddQuejaSugerencia.get('descripcion').touched;
   }
   get tipoNoValido() {
      return this.formAddQuejaSugerencia.get('tipo').invalid && this.formAddQuejaSugerencia.get('tipo').touched;
   }

}
