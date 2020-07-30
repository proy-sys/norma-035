import { Component, OnInit } from '@angular/core';
import { InfoEmpresaService } from '../../../services/info-empresa.service';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';
import { InfoEmpresa } from '../../../interfaces/info-empresa.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {


  empresa: InfoEmpresa = {};
  srcLogo: string;
  srcImagen: string;
  numeroTrabajadores: Object;

  constructor( private infoEmpresaService: InfoEmpresaService, private infoTrabajadorService: InfoTrabajadorService,
               private ruta: Router) {}

  ngOnInit(): void {
    this.cargarEmpresa();
  }

  cargarEmpresa(){

    this.infoTrabajadorService.getTotalTrabajadores().subscribe(
      data => {
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
      this.ruta.navigate(['empresa-edit']);
  }
}
