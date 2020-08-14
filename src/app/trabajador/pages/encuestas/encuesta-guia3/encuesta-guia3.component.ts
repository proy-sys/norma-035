import { Component, OnInit } from '@angular/core';
import { InfoRespuesta } from 'src/app/interfaces/info-respuesta.interface';
import { InfoGuiasService } from 'src/app/services/info-guias.service';
import { InfoAuthenticationService } from 'src/app/services/info-authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-encuesta-guia3',
  templateUrl: './encuesta-guia3.component.html',
  styleUrls: ['./encuesta-guia3.component.sass']
})
export class EncuestaGuia3Component implements OnInit {

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
              private ruta: Router) {}

  ngOnInit(): void {}



  verificarPregunta(pregunta: number): boolean{
      if (pregunta >= 18 && pregunta <= 33){
        return true;
     }else{
        return false;
     }
  }
  guardarAddGuia3(form: NgForm){

     this.respuesta.trabajador_id = this.infoAuthenticationService.getCurrentUser().user.id;
     this.respuesta.respuestas = [];

     let con = 0;

     Object.keys(form.controls).forEach(key => {
         this.respuesta.respuestas[con] = {pregunta_id: key, respuesta: form.controls[key].value};
         con++;
    });

     this.infoGuiaService.addRespuestasGuia(this.respuesta , 3)
     .subscribe(result => {

        if (result.estado === 200){
          if ( result.cFinal === 'Alto' || result.cFinal === 'Muy Alto'){
             this.ruta.navigate(['trabajador/encuesta-guia1-seccion-1']);
          }else{
             this.ruta.navigate(['trabajador/finalizar']);
          }
        }
    }, error => {
          console.log('error al dar de alta al trabajador:' + error.message);
    });
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
