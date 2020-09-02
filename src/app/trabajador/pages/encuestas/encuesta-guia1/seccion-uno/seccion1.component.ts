import { Component, OnInit } from '@angular/core';
import { InfoRespuesta } from 'src/app/interfaces/info-respuesta.interface';
import { InfoGuiasService } from 'src/app/services/info-guias.service';
import { Router } from '@angular/router';
import { InfoAuthenticationService } from 'src/app/services/info-authentication.service';
import { NgForm } from '@angular/forms';
import { InfoComunicacionService } from 'src/app/services/info-comunicacion.service';

@Component({
  selector: 'app-seccion1',
  templateUrl: './seccion1.component.html',
  styleUrls: ['./seccion1.component.sass']
})
export class Seccion1Component implements OnInit {

  respuesta: InfoRespuesta = {};
  contadorRespuestas: number;
  seccion1 = false;
   radioOptions = [
    { op1: 1},
    { op1: 2}
  ];

  constructor(public infoGuiaService: InfoGuiasService,
              public infoAuthenticationService: InfoAuthenticationService,
              public ruta: Router,
              public comunicacion: InfoComunicacionService
              ) {
              this.contadorRespuestas = 0;
              }

  ngOnInit(): void {}


  verificarSeccion(form: NgForm){

     this.respuesta.trabajador_id = this.infoAuthenticationService.getCurrentUser().user.id;
     this.respuesta.respuestas = [];

     Object.keys(form.controls).forEach(key => {
      if (form.controls[key].value !== ''){
         this.respuesta.respuestas[this.contadorRespuestas] = {pregunta_id: key, respuesta: form.controls[key].value};
         this.contadorRespuestas++;
      }
    });

     for (let i = 0, len = this.respuesta.respuestas.length; i < len; i++) {
       if (this.respuesta.respuestas[i].respuesta === 1){
             this.seccion1 = true;
             break;
       }
     }
     if (this.seccion1){
        this.infoAuthenticationService.updateRespuestas(this.respuesta);
        this.ruta.navigate(['trabajador/encuesta-guia1-seccion', this.contadorRespuestas]);
     }else{
        this.GuardarGuia1();
     }
   }



 GuardarGuia1(){

   this.infoGuiaService.addRespuestasGuia(this.respuesta , 1)
   .subscribe(result => {

     if (result.estado === 200){
         this.infoAuthenticationService.clearRespuestas();
         this.ruta.navigate(['trabajador/finalizar']);
     }
     }, error => {
       console.log('error:' + error.message);
    });
  }


}
