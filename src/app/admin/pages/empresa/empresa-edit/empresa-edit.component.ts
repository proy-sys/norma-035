import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import { InfoEmpresa } from 'src/app/interfaces/info-empresa.interface';
import { InfoEmpresaService } from 'src/app/services/info-empresa.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa-edit.component.html',
  styleUrls: ['./empresa-edit.component.css']
})
export class EmpresaEditComponent implements OnInit{


  empresa: InfoEmpresa = {};
  editaEmpresa: FormGroup;
  srcLogo: string;
  srcImagen: string;

  constructor( private infoEmpresaService: InfoEmpresaService,
               private formBuilder: FormBuilder,
               private ruta: Router,
               private toastr: ToastrService) {

  }

// *************************** CARGA Y VALIDACION FORM ****************************

  ngOnInit(): void {
      this.cargarEmpresa();

      this.editaEmpresa = this.formBuilder.group( {
        id: this.empresa.id,
        razon_social:  ['', Validators.required],
        direccion:  ['', Validators.required],
        telefono:  ['', Validators.required],
        email:  ['', Validators.required],
        logo : '',
        imagen: '',
    });
   }


  cargarEmpresa(){

    this.infoEmpresaService.obtenerEmpresa().subscribe(
      data => {
          this.empresa = data ;
          this.srcLogo = this.empresa.logo;
          this.srcImagen = this.empresa.imagen;
        }, (err) => {
          console.log('Hubo un error:' + err);
        }
      );
  }


  getBase64Image(img, x, y) {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, x, y);
    const dataURL = canvas.toDataURL();
    return dataURL;
  }

// *************************** EDIT ****************************

  guardarCambios(){

     const razonLogo: Element = document.getElementById('razon_social_logo');
     const razonImage: Element = document.getElementById('razon_social_imagen');
     this.empresa.logo = this.getBase64Image(document.getElementById('razon_social_logo'), 200, 170);
     this.empresa.imagen = this.getBase64Image(document.getElementById('razon_social_imagen'), 600, 400);
    //  if (razonLogo != null){
    //     this.empresa.logo = this.getBase64Image(document.getElementById('razon_social_logo'), 200, 170);
    //  }
    //  if ( razonImage != null){
    //     this.empresa.imagen = this.getBase64Image(document.getElementById('razon_social_imagen'), 600, 400);
    //  }
     if (this.editaEmpresa .invalid) {
      return Object.values( this.editaEmpresa.controls).forEach( control => {
        control.markAsTouched();
      });
    }else{
      this.infoEmpresaService.actualizarEmpresa(this.empresa)
      .pipe(first())
      .subscribe(data => {
          this.empresa = data;
          this.toastr.success('succesful' , 'la empresa se actualizo correctamente');
          this.ruta.navigate(['administrador/empresa']);
      }, error => {
            console.log('error en la modificación empresas:' + error.message);
            this.toastr.error('error' , error.message);
      });
    }
  }

  actualizarLogo(event: any): void {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
       this.srcLogo = event.target.result;
      },
      reader.readAsDataURL(event.target.files[0]);

      document.getElementById('label_logo').innerHTML = event.target.files[0].name;

    }
  }


   actualizarImagen(event: any): void {

    if (event.target.files && event.target.files[0]) {
       const reader = new FileReader();

       reader.onload = (event: any) => {
        this.srcImagen = event.target.result;
       },

       reader.readAsDataURL(event.target.files[0]);

       document.getElementById('label_imagen').innerHTML = event.target.files[0].name;

     }
   }

   get razonNoValido() {
    return this.editaEmpresa.get('razon_social').invalid && this.editaEmpresa.get('razon_social').touched;
  }
  get direccionNoValido() {
    return this.editaEmpresa.get('direccion').invalid && this.editaEmpresa.get('direccion').touched;
  }
  get telefonoNoValido() {
    return this.editaEmpresa.get('telefono').invalid && this.editaEmpresa.get('telefono').touched;
  }
  get emailNoValido() {
    return this.editaEmpresa.get('email').invalid && this.editaEmpresa.get('email').touched;
  }
  
  //  actualizarEstadoMunicipio(){
  //   this.infoEmpresaService.actualizarEmpresa(this.empresa)
  //   .pipe(first())
  //   .subscribe(data => {
  //       this.empresa = data;
  //       this.ruta.navigate(['administrador/empresa']);
  //   }, error => {
  //         console.log('error en la modificación empresas:' + error.message);
  //   });
  //  }
// *************************** RUTAS ****************************

   componente_empresa(): void {
    this.ruta.navigate(['administrador/empresa']);
 }

  }
