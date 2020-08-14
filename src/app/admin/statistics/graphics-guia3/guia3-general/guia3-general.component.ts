import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { InfoGuiasService } from '../../../../services/info-guias.service';
import { Router } from '@angular/router';
import { default as ChartDataLabels } from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-guia3-general',
  templateUrl: './guia3-general.component.html',
  styleUrls: ['./guia3-general.component.sass']
})
export class Guia3GeneralComponent {

  resultados: any = [];
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
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
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [ChartDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['RGB(16,86,241,0.5)', 'RGB(18,176,21,0.5)', 'RGB(255,255,0,0.8)', 'RGB(255,192,0,0.6)', 'RGB(255,0,0,0.5)'],
    },
  ];



  constructor(public infoGuiasService: InfoGuiasService,
              private ruta: Router
    ) {
      this.resultadoTotal();
     }

  resultadoTotal() {
    this.infoGuiasService.getResultadoTotal(3).subscribe(
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

  irListado() {
    this.ruta.navigate(['administrador/guia3-opciones']);
  }

}
