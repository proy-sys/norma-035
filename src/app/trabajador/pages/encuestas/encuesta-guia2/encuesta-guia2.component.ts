import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { InfoGuiasService } from 'src/app/services/info-guias.service';

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
