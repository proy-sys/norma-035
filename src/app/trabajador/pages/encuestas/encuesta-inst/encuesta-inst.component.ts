import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';

@Component({
  selector: 'app-encuesta-inst',
  templateUrl: './encuesta-inst.component.html',
  styleUrls: ['./encuesta-inst.component.sass']
})
export class EncuestaInstComponent implements OnInit {

  constructor(private ruta: Router, private infoTrabajadorService: InfoTrabajadorService) { }

  ngOnInit(): void {}

  irGuia(){
    this.infoTrabajadorService.getTotalTrabajadores().subscribe(
      data => {
          if (data <= 15){
               this.ruta.navigate(['trabajador/encuesta-guia1']);
          }
          if (data > 15 && data <= 50){
               this.ruta.navigate(['trabajador/encuesta-guia2']);
          }else if (data > 50){
               this.ruta.navigate(['trabajador/encuesta-guia3']);
          }
        }, (err) =>{
          console.log('Hubo un error:' + err);
        }
      );
  }
}
