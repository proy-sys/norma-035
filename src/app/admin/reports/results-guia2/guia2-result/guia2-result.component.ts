import { Component, ViewChild, ElementRef } from '@angular/core';
import { InfoTrabajadorService } from '../../../../services/info-trabajador.service';
import { InfoTrabajador } from '../../../../interfaces/info-trabajador.interfce';
import { InfoGuiasService } from '../../../../services/info-guias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-guia2-result',
  templateUrl: './guia2-result.component.html',
  styleUrls: ['./guia2-result.component.sass']
})
export class Guia2ResultComponent {

  trabajador: InfoTrabajador;
  listaTrabajadores: any = [];
  @ViewChild('htmlData') htmlData: ElementRef;

  constructor(public infoGuiasService: InfoGuiasService,
              public infoTrabajadorService: InfoTrabajadorService,
              public activatedRoute: ActivatedRoute,
              private ruta: Router)
              {
                this.cargarTrabajador();
                this.listadoTrabajadores();
              }

         // *************************** EDIT ****************************
  cargarTrabajador(){
    this.activatedRoute.params.subscribe(params => {
      this.infoTrabajadorService.getTrabajador(params.id).subscribe(
        data => {
              this.trabajador = data ;
            }, (err) => {
              console.log('Error al cargar:' + err);
            }
          );
    });
  }

  listadoTrabajadores() {
      this.activatedRoute.params.subscribe(params => {
        this.infoGuiasService.getGuia2(2, params.id).subscribe(
        data => {
          this.listaTrabajadores = data;
        }, (err) => {
          console.log('Error al cargar:' + err);
        }
      );
    });
  }

  imprimirGuia2() {
    /* const data = document.getElementById('htmlData');

     html2canvas(data).then((canvas) => {
       console.log(canvas);
       const imgData = canvas.toDataURL('img/png');
       const doc = new jsPDF();
       doc.addImage(imgData, 0 , 0 , 10 , 10);
       doc.save('ejemplo.pdf');
    });*/
    window.print();
  }


// ************************** RUTAS *****************************
  irListado() {
    this.ruta.navigate(['administrador/guia2-list']);
  }

}
