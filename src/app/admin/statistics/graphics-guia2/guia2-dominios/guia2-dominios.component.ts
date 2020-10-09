import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { InfoGuiasService } from '../../../../services/info-guias.service';
import { Router } from '@angular/router';
import { default as ChartDataLabels } from 'chartjs-plugin-datalabels';
import { Console } from 'console';
import { Grafica } from 'src/app/clases/graficas';

@Component({
  selector: 'app-guia2-dominios',
  templateUrl: './guia2-dominios.component.html',
  styleUrls: ['./guia2-dominios.component.sass']
})
export class Guia2DominiosComponent implements OnInit{

  conAmbienteTrabajo: Grafica;
  cargaTrabajo: Grafica;
  faltaControlTrabajo: Grafica;
  jornadaTrabajo: Grafica;
  interferenciaTrabajoFam: Grafica;
  liderazgo: Grafica;
  relacionTrabajo: Grafica;
  violencia: Grafica;

  constructor(private ruta: Router, infoGuia: InfoGuiasService) {
    this.conAmbienteTrabajo = new Grafica(infoGuia);
    this.cargaTrabajo = new Grafica(infoGuia);
    this.faltaControlTrabajo = new Grafica(infoGuia);
    this.jornadaTrabajo = new Grafica(infoGuia);
    this.interferenciaTrabajoFam = new Grafica(infoGuia);
    this.liderazgo  = new Grafica(infoGuia);
    this.relacionTrabajo = new Grafica(infoGuia);
    this.violencia = new Grafica(infoGuia);
  }

  ngOnInit(){

      this.conAmbienteTrabajo.resultadoDominio1(2);
      this.cargaTrabajo.resultadoDominio2(2);
      this.faltaControlTrabajo.resultadoDominio3(2);
      this.jornadaTrabajo.resultadoDominio4(2);
      this.interferenciaTrabajoFam.resultadoDominio5(2);
      this.liderazgo.resultadoDominio6(2);
      this.relacionTrabajo.resultadoDominio7(2);
      this.violencia.resultadoDominio8(2);


  }
  irListado() {
    this.ruta.navigate(['administrador/guia2-opciones']);
  }

}
