import { Component, OnInit } from '@angular/core';
import { InfoGuiasService } from 'src/app/services/info-guias.service';

@Component({
  selector: 'app-guia3',
  templateUrl: './guia3.component.html',
  styleUrls: ['./guia3.component.css']
})
export class Guia3Component implements OnInit {

  constructor( public infoGuia3Service: InfoGuiasService) { }

  ngOnInit(): void {
  }

}
