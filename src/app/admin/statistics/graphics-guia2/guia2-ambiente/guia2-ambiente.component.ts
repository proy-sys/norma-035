import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { InfoGuiasService } from '../../../../services/info-guias.service';
import { Router } from '@angular/router';
import { default as ChartDataLabels } from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-guia2-ambiente',
  templateUrl: './guia2-ambiente.component.html',
  styleUrls: ['./guia2-ambiente.component.sass']
})
export class Guia2AmbienteComponent {

  resultados: any = [];
  aa: number;
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'bar';
  public pieChartLegend = true;
  public pieChartPlugins = [ChartDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['#9BE5F7', '#12B015', '#FFFF00', '#FFC000', '#FF0000',],
    },
  ];



  constructor(public infoGuiasService: InfoGuiasService,
              private ruta: Router
    ) {
      this.resultadoAmbiente();
     }

  resultadoAmbiente() {
    this.infoGuiasService.getResultadoAmbiente(2).subscribe(
      data => {
        this.resultados = data;
        this.pieChartLabels = this.resultados.name;
        this.pieChartData = this.resultados.value;
        console.log(this.resultados.value);
      }
    );
  }


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  changeLegendPosition() {
    this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }

  irListado() {
    this.ruta.navigate(['administrador/guia2-opciones']);
  }

}
