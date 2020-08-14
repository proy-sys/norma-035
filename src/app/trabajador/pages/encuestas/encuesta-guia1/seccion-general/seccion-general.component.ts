import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InfoGuiasService } from 'src/app/services/info-guias.service';
import { InfoAuthenticationService } from 'src/app/services/info-authentication.service';
import { InfoRespuesta } from 'src/app/interfaces/info-respuesta.interface';
import { NgForm } from '@angular/forms';
import { Seccion1Component } from '../seccion-uno/seccion1.component';
import { param } from 'jquery';
import { InfoComunicacionService } from 'src/app/services/info-comunicacion.service';

@Component({
  selector: 'app-seccion-general',
  templateUrl: './seccion-general.component.html',
  styleUrls: ['./seccion-general.component.sass']
})
export class SeccionGeneralComponent implements OnInit {

   respuesta: InfoRespuesta = {};
   contadorRespuestas: number;

   radioOptions = [
    { op1: 1},
    { op1: 2}
  ];

  constructor(public infoGuiaService: InfoGuiasService,
              public infoAuthenticationService: InfoAuthenticationService,
              private ruta: Router,
              private activatedRoute: ActivatedRoute,
              private comunicacion: InfoComunicacionService,

              ){this.cargarRespuestas();}

  ngOnInit(): void {}

 cargarRespuestas(){
  this.activatedRoute.params.subscribe(params => {
    this.contadorRespuestas = params.con;
  });

  this.respuesta = this.infoAuthenticationService.getRespuestas();

 }


 guardarGuia(form: NgForm) {
  this.respuesta.trabajador_id = this.infoAuthenticationService.getCurrentUser().user.id;

  Object.keys(form.controls).forEach(key => {
    if (form.controls[key].value !== ''){
       this.respuesta.respuestas[this.contadorRespuestas] = {pregunta_id: key, respuesta: form.controls[key].value};
       this.contadorRespuestas++;
    }
});

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
