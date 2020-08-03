import { Component, OnInit } from '@angular/core';
import { InfoGuiasService } from 'src/app/services/info-guias.service';
import { InfoRespuesta } from 'src/app/interfaces/info-respuesta.interface';
import { InfoAuthenticationService } from 'src/app/services/info-authentication.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-encuesta-guia2',
  templateUrl: './encuesta-guia2.component.html',
  styleUrls: ['./encuesta-guia2.component.sass']
})

export class EncuestaGuia2Component implements OnInit {

  respuestas: InfoRespuesta[];
  formEncuesta2: FormGroup;

  constructor(public infoGuia2Service: InfoGuiasService,
              public infoAuthenticationService: InfoAuthenticationService,
              private fb: FormBuilder) {}

  ngOnInit(): void {this.initformEncuesta2()}

  initformEncuesta2(){
    this.formEncuesta2 = this.fb.group({
      respuesta: ['', Validators.required],
    });
  }

  get respuestaNoValida() {
    return this.formEncuesta2.get('respuesta').invalid && this.formEncuesta2.get('respuesta').touched;
  }
  finalizarEncuesta() {
    this.respuestas[0].trabajador_id = this.infoAuthenticationService.getCurrentUser().user.id;
  }

  verificarPregunta(pregunta: number): boolean{
      console.log(pregunta);
      if (pregunta >= 18 && pregunta <= 33){
        return true;
     }else{
        return false;
     }
  }

}
