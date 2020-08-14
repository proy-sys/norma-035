import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { InfoGuiasService } from '../../../../services/info-guias.service';
import { Router } from '@angular/router';
import { default as ChartDataLabels } from 'chartjs-plugin-datalabels';
import { Console } from 'console';

@Component({
  selector: 'app-guia3-dominios',
  templateUrl: './guia3-dominios.component.html',
  styleUrls: ['./guia3-dominios.component.sass']
})
export class Guia3DominiosComponent {

  resultados1: any = [];
  resultados2: any = [];
  resultados3: any = [];
  resultados4: any = [];
  resultados5: any = [];
  resultados6: any = [];
  resultados7: any = [];
  resultados8: any = [];
  resultados9: any = [];
  resultados10: any = [];
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
  public pieChartData1: number[] = [];
  public pieChartData2: number[] = [];
  public pieChartData3: number[] = [];
  public pieChartData4: number[] = [];
  public pieChartData5: number[] = [];
  public pieChartData6: number[] = [];
  public pieChartData7: number[] = [];
  public pieChartData8: number[] = [];
  public pieChartData9: number[] = [];
  public pieChartData10: number[] = [];

  public pieChartLabels: Label[] = ['Nulo', 'Bajo', 'Medio', 'Alto', 'Muy alto'];
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
      this.resultadoDominio1();
      this.resultadoDominio2();
      this.resultadoDominio3();
      this.resultadoDominio4();
      this.resultadoDominio5();
      this.resultadoDominio6();
      this.resultadoDominio7();
      this.resultadoDominio8();
      this.resultadoDominio9();
      this.resultadoDominio10();
     }
  // ************************** 1 ***********************
  resultadoDominio1() {
    this.infoGuiasService.getResultadoDominio1(3).subscribe(
      data => {
        this.resultados1 = data;
        this.pieChartData1 = this.resultados1.value;
        console.log(this.resultados1.value);
      }
    );
  }

  // ************************** 2 ***********************
  resultadoDominio2() {
    this.infoGuiasService.getResultadoDominio2(3).subscribe(
      data => {
        this.resultados2 = data;
        this.pieChartData2 = this.resultados2.value;
        console.log(this.resultados2.value);
      }
    );
  }

  // ************************** 3 ***********************
  resultadoDominio3() {
    this.infoGuiasService.getResultadoDominio3(3).subscribe(
      data => {
        this.resultados3 = data;
        this.pieChartData3 = this.resultados3.value;
        console.log(this.resultados3.value);
      }
    );
  }

  // ************************** 4 ***********************
  resultadoDominio4() {
    this.infoGuiasService.getResultadoDominio4(3).subscribe(
      data => {
        this.resultados4 = data;
        this.pieChartData4 = this.resultados4.value;
        console.log(this.resultados4.value);
      }
    );
  }

  // ************************** 5 ***********************
  resultadoDominio5() {
    this.infoGuiasService.getResultadoDominio5(3).subscribe(
      data => {
        this.resultados5 = data;
        this.pieChartData5 = this.resultados5.value;
        console.log(this.resultados5.value);
      }
    );
  }

  // ************************** 6 ***********************
  resultadoDominio6() {
    this.infoGuiasService.getResultadoDominio6(3).subscribe(
      data => {
        this.resultados6 = data;
        this.pieChartData6 = this.resultados6.value;
        console.log(this.resultados6.value);
      }
    );
  }

  // ************************** 7 ***********************
  resultadoDominio7() {
    this.infoGuiasService.getResultadoDominio7(3).subscribe(
      data => {
        this.resultados7 = data;
        this.pieChartData7 = this.resultados7.value;
        console.log(this.resultados7.value);
      }
    );
  }

  // ************************** 8 ***********************
  resultadoDominio8() {
    this.infoGuiasService.getResultadoDominio8(3).subscribe(
      data => {
        this.resultados8 = data;
        this.pieChartData8 = this.resultados8.value;
        console.log(this.resultados8.value);
      }
    );
  }

  // ************************** 9 ***********************
  resultadoDominio9() {
    this.infoGuiasService.getResultadoDominio9(3).subscribe(
      data => {
        this.resultados9 = data;
        this.pieChartData9 = this.resultados9.value;
        console.log(this.resultados9.value);
      }
    );
  }

  // ************************** 10 ***********************
  resultadoDominio10() {
    this.infoGuiasService.getResultadoDominio10(3).subscribe(
      data => {
        this.resultados10 = data;
        this.pieChartData10 = this.resultados10.value;
        console.log(this.resultados10.value);
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
    this.ruta.navigate(['administrador/guia2-opciones']);
  }

}
