import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtResponseI } from 'src/app/interfaces/info-jwt.interface';
import { InfoAuthenticationService } from 'src/app/services/info-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CanLoginGuard implements CanActivate {

  private jwtUser: JwtResponseI;
  constructor(private authService: InfoAuthenticationService, private ruta: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean{

    this.jwtUser = this.authService.getCurrentUser();

    if (this.jwtUser != null){
      if (this.jwtUser.user.role === '1'){
           this.ruta.navigate(['administrador']);
      }else{
           this.ruta.navigate(['trabajador']);
      }
      return true;
    }else{
        return true;
    }
  }
}
