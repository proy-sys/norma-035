import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { InfoGuiasService } from '../../../../services/info-guias.service';
import { Router } from '@angular/router';
import { default as ChartDataLabels } from 'chartjs-plugin-datalabels';
import { Grafica } from 'src/app/clases/graficas';

@Component({
  selector: 'app-guia2-general',
  templateUrl: './guia2-general.component.html',
  styleUrls: ['./guia2-general.component.sass']
})
export class Guia2GeneralComponent implements OnInit {

  general: Grafica;

  constructor(private ruta: Router, infoGuia: InfoGuiasService) {
      this.general = new Grafica(infoGuia);
  }

  ngOnInit(){
    this.general.resultadoGeneral(2);
  }
  irListado(){
    this.ruta.navigate(['administrador/guia2-opciones']);
  }
  imprimir(){
    window.print();
  }

}
