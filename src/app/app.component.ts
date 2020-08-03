import { Component} from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { InfoGuiasService } from './services/info-guias.service';
import { InfoTrabajadorService } from './services/info-trabajador.service';
import { InfoEmpresaService } from './services/info-empresa.service';
import { InfoSugerenciaQuejaService } from './services/info-sugerencia-queja.service';
import { InfoAuthenticationService } from './services/info-authentication.service';
import { JwtResponseI } from './interfaces/info-jwt.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

 public isLogged: boolean;
 public isAdmin: boolean;
 public isTrabajador: boolean;
 private jwtUser: JwtResponseI;

  constructor( public infoGuia1Service: InfoGuiasService,
               public infoGuia2Service: InfoGuiasService,
               public infoGuia3Service: InfoGuiasService,
               public infoTrabajadorService: InfoTrabajadorService,
               public infoEmpresaService: InfoEmpresaService,
               public infoServices: InfoPaginaService,
               public infoSugerenciaQuejaService: InfoSugerenciaQuejaService,
               public infoAutoentificacionService: InfoAuthenticationService,
               private ruta: Router
               ){
                 this.isLogged = false;
                 this.isAdmin = false;
                 this.onCheckUser();
               }

  onCheckUser(){
    this.jwtUser = this.infoAutoentificacionService.getCurrentUser();
    if (this.jwtUser === null){
         this.isLogged = false;
         this.isAdmin = false;
         this.isTrabajador = false;
    }else{
        this.isLogged = true;
        if (this.jwtUser.estado === 200){
           if (this.jwtUser.user.role === '1'){
                this.isAdmin = true;
           }else{
                this.isTrabajador = true;
           }
        }else{
               console.log('Error');
        }
    }
  }
}