import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoAuthenticationService } from 'src/app/services/info-authentication.service';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.component.html',
  styleUrls: ['./finalizar.component.sass']
})
export class FinalizarComponent implements OnInit {

  constructor(private ruta: Router, public infoAutoentificacionService: InfoAuthenticationService) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    localStorage.removeItem('usuario');
    this.ruta.navigate(['login']);
  }

}
