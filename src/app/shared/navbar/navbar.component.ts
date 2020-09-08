import { Component, OnInit, NgZone } from '@angular/core';
import { InfoAuthenticationService } from 'src/app/services/info-authentication.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(   public infoAutoentificacionService: InfoAuthenticationService,
                 private ruta: Router,
                 private zone: NgZone) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
  this.infoAutoentificacionService.logout().subscribe(
      data => {
          if (data === 200){
               localStorage.removeItem('usuario');
               this.ruta.navigate(['login']);
               this.zone.runOutsideAngular(() => {
                location.reload();
             });
          }
        }, (err) => {
          console.log('Hubo un error:' + err);
        }
      );
  }
}
