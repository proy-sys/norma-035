import { Component, OnInit } from '@angular/core';
import { InfoGuiasService } from 'src/app/services/info-guias.service';
import { InfoRespuesta } from 'src/app/interfaces/info-respuesta.interface';
import { Router } from '@angular/router';
import { InfoAuthenticationService } from 'src/app/services/info-authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-encuesta-guia1',
  templateUrl: './encuesta-guia1.component.html',
  styleUrls: ['./encuesta-guia1.component.sass']
})
export class EncuestaGuia1Component implements OnInit {

  respuesta: InfoRespuesta = {};

   radioOptions = [
    { op1: 1},
    { op1: 2}
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
  guardarAddGuia1(form: NgForm){

     this.respuesta.trabajador_id = this.infoAuthenticationService.getCurrentUser().user.id;
     this.respuesta.respuestas = [];

     let con = 0;

     Object.keys(form.controls).forEach(key => {
         this.respuesta.respuestas[con] = {pregunta_id: key, respuesta: form.controls[key].value};
         con++;
    });

     this.infoGuiaService.addRespuestasGuia(this.respuesta , 1)
     .subscribe(result => {

        if (result.estado === 200){
            this.ruta.navigate(['trabajador/finalizar']);
        }
    }, error => {
          console.log('error al dar de alta al trabajador:' + error.message);
    });
   }

}
