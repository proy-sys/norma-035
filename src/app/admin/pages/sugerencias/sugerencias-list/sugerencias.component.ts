import { Component, OnInit } from '@angular/core';
import { InfoSugerenciaQueja } from 'src/app/interfaces/info-sugerencia-queja.interface.';
import { InfoSugerenciaQuejaService } from 'src/app/services/info-sugerencia-queja.service';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.sass']
})
export class SugerenciasComponent implements OnInit {

  listaSugerencias =  new Array<InfoSugerenciaQueja>();

  constructor(public infoSugerenciaQuejaService: InfoSugerenciaQuejaService,
              ) {}

  ngOnInit(): void {
    this.listarSugerencias();
  }

 listarSugerencias(){
  this.infoSugerenciaQuejaService. getListadoQueja_Sugerencia().subscribe(
    data => {
        this.listaSugerencias = data;
      }
    );
 }


 cambiarStatus(id , status){
   this.infoSugerenciaQuejaService.setStatus(id , status).subscribe(
    data => {
      console.log(data);
      this.ngOnInit();
    }
  );
 }
}
