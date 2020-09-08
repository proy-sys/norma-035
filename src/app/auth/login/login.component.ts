import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InfoAuthenticationService } from 'src/app/services/info-authentication.service';
import { Router } from '@angular/router';
import { RoleValidator } from '../helpers/roleValidator';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  srcLogin: string;
  roleValidator: RoleValidator;

  constructor( private fb: FormBuilder,
               private toastr: ToastrService,
               private infoAutoentificacionService: InfoAuthenticationService,
               private ruta: Router,
               private zone: NgZone
               ){}
  ngOnInit() {
       this.LoginFormulario();
  }

  LoginFormulario(){
    this.formLogin = this.fb.group({
      username:   ['', Validators.required],
      password:   ['', Validators.required],
    });
  }

  get usernameNoValido(){
          return this.formLogin.get('username').invalid && this.formLogin.get('username').touched;
  }
  get passwordNoValido(){
         return this.formLogin.get('password').invalid && this.formLogin.get('password').touched;
  }

  onLogin(){
    if ( this.formLogin.invalid) {
      return Object.values(this.formLogin.controls).forEach( control => {
        control.markAsTouched();
      });
    } else{
      this.infoAutoentificacionService.login(this.formLogin.value).subscribe(data => {
        if (data.estado === 200){
          if (data.res){

              this.infoAutoentificacionService.updateUser(data);
              this.toastr.success('Inicio de sesión' , data.msg);

              if (data.user.role === '1'){
                   this.zone.runOutsideAngular(() => {
                       location.reload();
                    });
                   this.ruta.navigate(['administrador']);
              }else if (data.user.role === '0'){
                 this.ruta.navigate(['trabajador']);
              }

          }else{
              this.toastr.error('Inicio de sesión' , data.msg);
          }
        }
    }, error => {
          console.log('error:' + error.message);
    });
    }
   }
}