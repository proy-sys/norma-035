import { Component, OnInit } from '@angular/core';
import { InfoGuiasService } from 'src/app/services/info-guias.service';

@Component({
  selector: 'app-guia2-admin',
  templateUrl: './guia2-admin.component.html',
  styleUrls: ['./guia2-admin.component.sass']
})
export class Guia2AdminComponent implements OnInit {

  constructor( public infoGuia2Service: InfoGuiasService) { }

  ngOnInit(): void {}

}
