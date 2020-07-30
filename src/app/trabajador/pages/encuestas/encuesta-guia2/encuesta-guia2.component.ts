import { Component, OnInit } from '@angular/core';
import { InfoGuiasService } from '../../../services/info-guias.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-encuesta-guia2',
  templateUrl: './encuesta-guia2.component.html',
  styleUrls: ['./encuesta-guia2.component.sass']
})

export class EncuestaGuia2Component implements OnInit {

  constructor(public infoGuia2Service: InfoGuiasService) { }

  ngOnInit(): void {}
  guardarCuestionario(){
    alert('Se ha guardado la encuesta correctamente');
  }

}
