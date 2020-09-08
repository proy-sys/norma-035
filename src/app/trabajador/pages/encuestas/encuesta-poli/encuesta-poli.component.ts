import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';
import { InfoPoliticaService } from 'src/app/services/info-politica.service';
import { InfoEmpresaService } from 'src/app/services/info-empresa.service';
import { InfoEmpresa } from 'src/app/interfaces/info-empresa.interface';

@Component({
  selector: 'app-encuesta-poli',
  templateUrl: './encuesta-poli.component.html',
  styleUrls: ['./encuesta-poli.component.sass']
})
export class EncuestaPoliComponent implements OnInit {
  politica: any = {};
  empresa: InfoEmpresa = {};
  valor: number;
  constructor(private ruta: Router,
              private infoTrabajadorService: InfoTrabajadorService,
              private infoPoliticaService: InfoPoliticaService,
              private infoEmpresaService: InfoEmpresaService) { }

  ngOnInit(): void {
    this.cargarPolitica();
   }
   cargarPolitica(){
    this.infoPoliticaService.getPolitica(1).subscribe(
      data => {
           this.politica = data ;
         }, (err) => {
           console.log('Error al cargar:' + err);
         }
    );
    this.infoEmpresaService.obtenerEmpresa().subscribe(
      data => {
          this.empresa = data;
        }, (err) => {
          console.log('Hubo un error:' + err);
        }
      );
   }

  irIntrucciones(){
    this.infoTrabajadorService.asignarPoliticaTrabajador().subscribe(
      data => {
         if (data === 200){
          this.infoTrabajadorService.getTotalTrabajadores().subscribe(
             result => {
                if (result <= 50){
                     this.valor = 2;
                }else if (data > 50){
                     this.valor = 3;
                }
                this.ruta.navigate(['trabajador/encuesta-inst', this.valor]);
              }, (err) => {
                  console.log('Hubo un error en pasar instrucciones:' + err);
              }
            );
         }
        }, (err) => {
          console.log('Hubo un error en asignar politica:' + err);
        }
      );
  }
}
