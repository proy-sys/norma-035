import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InfoAuthenticationService } from 'src/app/services/info-authentication.service';
import { RoleValidator } from '../helpers/roleValidator';
import { Router } from '@angular/router';

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
               ){}

  ngOnInit() {
       this.LoginFormulario();
  }

  LoginFormulario() {
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
    } else {
        this.infoAutoentificacionService.login(this.formLogin.value).subscribe(data => {
          if (data.estado === 200){
            if (data.res){
               this.toastr.success('Inicio de sesión' , 'successful');
               if (this.roleValidator.isAdmin(data.user)){
                   this.ruta.navigate(['admin/empresa']);
               }
               else if (this.roleValidator.isEmploye(data.user)){
                    this.ruta.navigate(['trabajador/encuesta-poli']);
              }
            }else{
                this.toastr.error('Inicio de sesión' , data.msg);
            }
          }
      }, error => {
            console.log('error al dar de alta al trabajador:' + error.message);
      });
    }
   }


}