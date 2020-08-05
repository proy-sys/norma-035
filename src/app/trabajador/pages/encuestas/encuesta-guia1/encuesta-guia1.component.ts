import { Component, OnInit } from '@angular/core';
import { InfoGuiasService } from 'src/app/services/info-guias.service';

@Component({
  selector: 'app-encuesta-guia1',
  templateUrl: './encuesta-guia1.component.html',
  styleUrls: ['./encuesta-guia1.component.sass']
})
export class EncuestaGuia1Component implements OnInit {

  constructor(public infoGuia1Service: InfoGuiasService) {

  }

  ngOnInit(): void {

  }

}
