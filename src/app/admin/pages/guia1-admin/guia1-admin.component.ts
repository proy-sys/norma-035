import { Component, OnInit } from '@angular/core';
import { InfoGuiasService } from 'src/app/services/info-guias.service';

@Component({
  selector: 'app-guia1-admin',
  templateUrl: './guia1-admin.component.html',
  styleUrls: ['./guia1-admin.component.sass']
})
export class Guia1AdminComponent implements OnInit {

  constructor( public infoGuia1Service: InfoGuiasService ) { }

  ngOnInit(): void {
  }

}
