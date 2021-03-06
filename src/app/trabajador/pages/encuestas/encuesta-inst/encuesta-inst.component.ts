import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';

@Component({
  selector: 'app-encuesta-inst',
  templateUrl: './encuesta-inst.component.html',
  styleUrls: ['./encuesta-inst.component.sass']
})
export class EncuestaInstComponent implements OnInit {

  paramInstr: number;
  constructor(private ruta: Router, private infoTrabajadorService: InfoTrabajadorService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarInstrucciones();
  }

  cargarInstrucciones(){
   this.activatedRoute.params.subscribe(params => {
        this.paramInstr = params.id;
    });
  }

  irGuia(){

    if (this.paramInstr == 1){
       this.ruta.navigate(['trabajador/encuesta-guia1-seccion-1']);
    }else{
      this.infoTrabajadorService.getTotalTrabajadores().subscribe(
        data => {
            if (data <= 50){
               this.ruta.navigate(['trabajador/encuesta-guia2']);
            }else if (data > 50 ){
                this.ruta.navigate(['trabajador/encuesta-guia3']);
            }
          }, (err) => {
            console.log('Hubo un error:' + err);
          }
        );
    }
  }
}
