import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { InfoGuiasService } from '../../../../services/info-guias.service';
import { Router } from '@angular/router';
import { default as ChartDataLabels } from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-guia3-categorias',
  templateUrl: './guia3-categorias.component.html',
  styleUrls: ['./guia3-categorias.component.sass']
})
export class Guia3CategoriasComponent {

  resultadosAmb: any = [];
  resultadosFac: any = [];
  resultadosOrg: any = [];
  resultadosLid: any = [];
  resultadosEnt: any = [];
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
  public pieChartData: number[] = [];
  public pieChartData2: number[] = [];
  public pieChartData3: number[] = [];
  public pieChartData4: number[] = [];
  public pieChartData5: number[] = [];

  public pieChartLabels: Label[] = [];
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
      this.resultadoCategoriaAmb();
      this.resultadoCategoriaFac();
      this.resultadoCategoriaOrg();
      this.resultadoCategoriaLid();
      this.resultadoCategoriaEnt();
     }

  resultadoCategoriaAmb() {
    this.infoGuiasService.getResultadoCategoriaAmb(3).subscribe(
      data => {
        this.resultadosAmb = data;
        this.pieChartLabels = this.resultadosAmb.name;
        this.pieChartData = this.resultadosAmb.value;
        // .log(this.resultadosAmb);
      }
    );
  }

  resultadoCategoriaFac() {
    this.infoGuiasService.getResultadoCategoriaFac(3).subscribe(
      data => {
        this.resultadosFac = data;
        this.pieChartLabels = this.resultadosFac.name;
        this.pieChartData2 = this.resultadosFac.value;
        // console.log(this.resultadosFac);
      }
    );
  }

  resultadoCategoriaOrg() {
    this.infoGuiasService.getResultadoCategoriaOrg(3).subscribe(
      data => {
        this.resultadosOrg = data;
        this.pieChartLabels = this.resultadosOrg.name;
        this.pieChartData3 = this.resultadosOrg.value;
        // .log(this.resultadosOrg);
      }
    );
  }

  resultadoCategoriaLid() {
    this.infoGuiasService.getResultadoCategoriaLid(3).subscribe(
      data => {
        this.resultadosLid = data;
        this.pieChartLabels = this.resultadosLid.name;
        this.pieChartData4 = this.resultadosLid.value;
        console.log(this.resultadosLid);
      }
    );
  }

  resultadoCategoriaEnt() {
    this.infoGuiasService.getResultadoCategoriaEnt(3).subscribe(
      data => {
        this.resultadosEnt = data;
        this.pieChartLabels = this.resultadosEnt.name;
        this.pieChartData5 = this.resultadosEnt.value;
        console.log(this.resultadosEnt);
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

  // changeLegendPosition() {
  //   this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  // }

  irListado() {
    this.ruta.navigate(['administrador/guia3-opciones']);
  }

}
