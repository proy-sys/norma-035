import { Component, OnInit } from '@angular/core';
import { InfoGuiasService } from 'src/app/services/info-guias.service';
import { InfoRespuesta } from 'src/app/interfaces/info-respuesta.interface';
import { InfoAuthenticationService } from 'src/app/services/info-authentication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-encuesta-guia2',
  templateUrl: './encuesta-guia2.component.html',
  styleUrls: ['./encuesta-guia2.component.sass']
})

export class EncuestaGuia2Component implements OnInit {

  respuesta: InfoRespuesta = {};
  c1 = false;
  c2 = false;
  radioOptions = [
    { op1: '0' , op2: '4'},
    { op1: '1' , op2: '3'},
    { op1: '2' , op2: '2'},
    { op1: '3' , op2: '1'},
    { op1: '4' , op2: '0'}
  ];

  constructor(public infoGuiaService: InfoGuiasService,
              public infoAuthenticationService: InfoAuthenticationService,
              private ruta: Router,
              private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
  }



  verificarPregunta(pregunta: number): boolean{
      if (pregunta >= 18 && pregunta <= 33){
        return true;
     }else{
        return false;
     }
  }
  guardarAddGuia2(form: NgForm){
      this.spinner.show();
      setTimeout(() => {
           this.spinner.hide();
           this.respuesta.trabajador_id = this.infoAuthenticationService.getCurrentUser().user.id;
           this.respuesta.respuestas = [];

           let con = 0;

           Object.keys(form.controls).forEach(key => {
           if (form.controls[key].value !== '' && form.controls[key].value !== 'no' && form.controls[key].value !== 'si'){
              this.respuesta.respuestas[con] = {pregunta_id: key, respuesta: form.controls[key].value};
              con++;
           }
         });
           this.infoGuiaService.addRespuestasGuia(this.respuesta , 2)
          .subscribe(result => {
             if (result.estado === 200){
              if ( result.cFinal === 'Alto' || result.cFinal === 'Muy Alto'){
                 this.ruta.navigate(['trabajador/encuesta-inst/', 1]);
              }else{
                  this.ruta.navigate(['trabajador/finalizar']);
              }
            }
         }, error => {
               console.log('error:' + error.message);
         });
     }, 16000);
   }
   validarRadio(evt: any, num: any){
        if (num === 1){
           if (evt.target.value === 'si'){
                this.c1 = true;
           }else{
                this.c1 = false;
           }
        }else if (num === 2){
          if (evt.target.value === 'si'){
            this.c2 = true;
         }else{
            this.c2 = false;
          }
        }
   }
}