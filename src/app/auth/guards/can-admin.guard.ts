import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InfoAuthenticationService } from 'src/app/services/info-authentication.service';
import { JwtResponseI } from 'src/app/interfaces/info-jwt.interface';

@Injectable({
  providedIn: 'root'
})
export class CanAdminGuard implements CanActivate {
  private jwtUser: JwtResponseI;
  constructor(private authService: InfoAuthenticationService, private ruta: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean{

    this.jwtUser = this.authService.getCurrentUser();
    if (this.jwtUser !== null){
      if (this.jwtUser.user.role === '1'){
           return true;
      }else{
           window.alert('Acceso denegado');
           this.ruta.navigate(['trabajador']);
           return false;
      }
    }else {
      this.ruta.navigate(['login']);
      return false;
    }
  }
}
