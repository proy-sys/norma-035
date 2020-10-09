import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoEmpresa } from 'src/app/interfaces/info-empresa.interface';
import { InfoEmpresaService } from 'src/app/services/info-empresa.service';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';
import { FLOAT } from 'html2canvas/dist/types/css/property-descriptors/float';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {


  empresa: InfoEmpresa = {};
  srcLogo: string;
  srcImagen: string;
  numeroTrabajadores: number;
  muestra: any;
  muestraRedondeo: any;

  constructor( private infoEmpresaService: InfoEmpresaService, 
               private infoTrabajadorService: InfoTrabajadorService,
               private ruta: Router) {}

  ngOnInit(): void {
    this.cargarEmpresa();
    this.calculoRepresentativo();
  }

  calculoRepresentativo(){
    //  const a1 = 16 * 0.9604;
    //  const a2 = 0.0025 * (16 - 1) + 0.9604;
  }
  cargarEmpresa(){

    this.infoTrabajadorService.getTotalTrabajadores().subscribe(
      data => {

          const a = 0.9604 * data;
          const b = (0.0025 * (data - 1)) + 0.9604;
          this.muestra = (a / b).toFixed(3);
          this.muestraRedondeo = Math.round(a / b);


          this.numeroTrabajadores = data;
        }, (err) => {
          console.log('Hubo un error:' + err);
        }
      );

    this.infoEmpresaService.obtenerEmpresa().subscribe(
      data => {
          this.empresa = data;
          this.srcLogo = this.empresa.logo;
          this.srcImagen = this.empresa.imagen;
        }, (err) => {
          console.log('Hubo un error:' + err);
        }
      );
  }

  ruta_editar_empresa(): void {
      this.ruta.navigate(['administrador/empresa-edit']);
  }
}
