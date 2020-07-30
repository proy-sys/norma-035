import { Component, OnInit } from '@angular/core';
import { InfoGuiasService } from 'src/app/services/info-guias.service';

@Component({
  selector: 'app-guia2',
  templateUrl: './guia2.component.html',
  styleUrls: ['./guia2.component.css']
})
export class Guia2Component implements OnInit {

  constructor(public infoGuia2Service: InfoGuiasService) { }

  ngOnInit(): void {
  }

}
