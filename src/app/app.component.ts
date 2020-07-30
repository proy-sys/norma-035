import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { InfoGuiasService } from './services/info-guias.service';
import { InfoTrabajadorService } from './services/info-trabajador.service';
import { InfoEmpresaService } from './services/info-empresa.service';
import { InfoSugerenciaQuejaService } from './services/info-sugerencia-queja.service';
import { InfoAuthenticationService } from './services/info-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor( public infoGuia1Service: InfoGuiasService,
               public infoGuia2Service: InfoGuiasService,
               public infoGuia3Service: InfoGuiasService,
               public infoTrabajadorService: InfoTrabajadorService,
               public infoEmpresaService: InfoEmpresaService,
               public infoServices: InfoPaginaService,
               public infoSugerenciaQuejaService: InfoSugerenciaQuejaService,
               public infoAutoentificacionService: InfoAuthenticationService
               ){}

}
