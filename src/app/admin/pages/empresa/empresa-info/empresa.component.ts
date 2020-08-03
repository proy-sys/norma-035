import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoEmpresa } from 'src/app/interfaces/info-empresa.interface';
import { InfoEmpresaService } from 'src/app/services/info-empresa.service';
import { InfoTrabajadorService } from 'src/app/services/info-trabajador.service';


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
      this.ruta.navigate(['administrador/empresa-edit']);
  }
}
