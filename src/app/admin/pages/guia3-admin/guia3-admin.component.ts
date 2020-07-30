import { Component, OnInit } from '@angular/core';
import { InfoGuiasService } from 'src/app/services/info-guias.service';

@Component({
  selector: 'app-guia3-admin',
  templateUrl: './guia3-admin.component.html',
  styleUrls: ['./guia3-admin.component.sass']
})
export class Guia3AdminComponent implements OnInit {

  constructor( public infoGuia3Service: InfoGuiasService) { }

  ngOnInit(): void {
  }

}
