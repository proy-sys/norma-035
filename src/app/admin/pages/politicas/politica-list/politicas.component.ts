
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPoliticaService } from 'src/app/services/info-politica.service';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.css']
})
export class PoliticasComponent implements OnInit {


  politica: any = {};
  constructor(private infoPoliticaService: InfoPoliticaService, private ruta: Router){}

  ngOnInit(): void {
    this.main();
  }

  main(){
    this.infoPoliticaService.verificarEstado().subscribe(
      data => {
            if (data.estado === 200){
              if (data.status){
                   this.cargarListado();
               }else{
                 this.cargarPolitica(data.id);
               }
            }
        }, (err) => {
           console.log('Hubo un error en la solicitud de estado:' + err);
        }
      );
  }

  cargarListado(){
    this.infoPoliticaService.getListadoPoliticas().subscribe(
      data => {
          this.politica = data;
        }, (err) => {
          console.log('Hubo un error:' + err);
        }
      );
  }

  cargarPolitica(ide: number){
     this.ruta.navigate(['/politicas-info-edit', ide]);
  }


   asignarPolitica(ide: number ){
   this.infoPoliticaService.setPolitica(ide).subscribe(
      data => {
             this.ruta.navigate(['/politicas-info-edit', ide ]);
        }, (err) => {
          console.log('Hubo un error:' + err);
        }
      );
      }
}
