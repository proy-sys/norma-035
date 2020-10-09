import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { InfoGuiasService } from 'src/app/services/info-guias.service';
import { default as ChartDataLabels } from 'chartjs-plugin-datalabels';



export class Grafica{

   resultados: any = [];
   sumatoria: number;
   pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          if (value !== 0){
            const porcentaje = value * 100 / this.sumatoria;
            return porcentaje.toFixed(1) + '%';
          }else{
              return '';
          }
        },
      },
    }
  };
  pieChartLabels: Label[] = [];
  pieChartData: number[] = [];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [ChartDataLabels];
  pieChartColors = [
    {
      backgroundColor: ['RGB(16,86,241,0.5)', 'RGB(18,176,21,0.5)', 'RGB(255,255,0,0.8)', 'RGB(255,192,0,0.6)', 'RGB(255,0,0,0.5)'],
    },
  ];

 constructor(public infoGuiasService: InfoGuiasService) {}

  private cargarDatos(data: any){
       this.resultados = data;
       this.pieChartLabels = this.resultados.name;
       this.pieChartData = this.resultados.value;
       this.sumatoria = this.calculoSumatoria();
  }

  private calculoSumatoria(){
    let suma = 0;
    this.pieChartData.forEach(element => {
      suma += element;
    });
    return suma;
  }

  resultadoGeneral(guia: number) {
    this.infoGuiasService.getResultadoTotal(guia).subscribe(
      data => {
        this.cargarDatos(data);
      }
    );
  }
  resultadoCategoriaAmb(guia: number) {
    this.infoGuiasService.getResultadoCategoriaAmb(guia).subscribe(
      data => {
         this.cargarDatos(data);
      }
    );
  }

  resultadoCategoriaFac(guia: number) {
    this.infoGuiasService.getResultadoCategoriaFac(guia).subscribe(
      data => {
         this.cargarDatos(data);
      }
    );
  }

  resultadoCategoriaOrg(guia: number) {
    this.infoGuiasService.getResultadoCategoriaOrg(guia).subscribe(
      data => {
        this.cargarDatos(data);
      }
    );
  }

  resultadoCategoriaLid(guia: number) {
    this.infoGuiasService.getResultadoCategoriaLid(guia).subscribe(
      data => {
        this.cargarDatos(data);
      }
    );
  }

  resultadoDominio1(guia: number) {
    this.infoGuiasService.getResultadoDominio1(guia).subscribe(
      data => {
         this.cargarDatos(data);
      }
    );
  }

  resultadoDominio2(guia: number) {
    this.infoGuiasService.getResultadoDominio2(guia).subscribe(
      data => {
         this.cargarDatos(data);
      }
    );
  }

  resultadoDominio3(guia: number) {
    this.infoGuiasService.getResultadoDominio3(guia).subscribe(
      data => {
       this.cargarDatos(data);
      }
    );
  }

  resultadoDominio4(guia: number) {
    this.infoGuiasService.getResultadoDominio4(guia).subscribe(
      data => {
        this.cargarDatos(data);
      }
    );
  }

  resultadoDominio5(guia: number) {
    this.infoGuiasService.getResultadoDominio5(guia).subscribe(
      data => {
        this.cargarDatos(data);
      }
    );
  }

  resultadoDominio6(guia: number) {
    this.infoGuiasService.getResultadoDominio6(guia).subscribe(
      data => {
        this.cargarDatos(data);
      }
    );
  }


  resultadoDominio7(guia: number) {
    this.infoGuiasService.getResultadoDominio7(guia).subscribe(
      data => {
        this.cargarDatos(data);
      }
    );
  }

  resultadoDominio8(guia: number) {
    this.infoGuiasService.getResultadoDominio8(guia).subscribe(
      data => {
         this.cargarDatos(data);
      }
    );
  }

}