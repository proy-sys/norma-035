import { Component, OnInit } from '@angular/core';
import { InfoGuiasService } from 'src/app/services/info-guias.service';

@Component({
  selector: 'app-guia1',
  templateUrl: './guia1.component.html',
  styleUrls: ['./guia1.component.css']
})
export class Guia1Component implements OnInit {

  constructor( public infoGuia1Service: InfoGuiasService) { }

  ngOnInit(): void {
  }

}
