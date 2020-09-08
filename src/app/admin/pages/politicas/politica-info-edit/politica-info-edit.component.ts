import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { InfoPoliticaService } from 'src/app/services/info-politica.service';
import { InfoEmpresaService } from '../../../../services/info-empresa.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-politica-info-edit',
  templateUrl: './politica-info-edit.component.html',
  styleUrls: ['./politica-info-edit.component.sass']
})
export class PoliticaInfoEditComponent implements OnInit {

  politica: any = {};
  mostrar = false;
  srcLogo: string;
  formEditPolitica: FormGroup;
  constructor( private infoPoliticaService: InfoPoliticaService,
               private infoEmpresaService: InfoEmpresaService,
               private ruta: Router,
               private fb: FormBuilder,
               private activatedRoute: ActivatedRoute,
               private toastr: ToastrService ) {

     }

  ngOnInit(): void {
    this.cargarPolitica();
    this.crearFormulario();
    this.obtenerLogo();

    // this.formEditPolitica = this.fb.group( {

    // });
  }

  obtenerLogo() {
    this.infoEmpresaService.obtenerEmpresa().subscribe(
      data => {
        this.srcLogo = data.logo;
         }, (err) => {
           console.log('Error al cargar:' + err);
         }
       );
  }

  cargarPolitica(){
    this.activatedRoute.params.subscribe(params => {
      this.infoPoliticaService.getPolitica(params.id).subscribe(
        data => {
             this.politica = data ;
           }, (err) => {
             console.log('Error al cargar:' + err);
           }
         );
    });
  }
  crearFormulario(){
    this.formEditPolitica = this.fb.group({
       descripcion: ['', Validators.required],
    });
 }

  // contenido(pol: string){
  //       $('#textarea_editor').val(pol);
  // }
  get descripcionNoValido() {
    return this.formEditPolitica.get('descripcion').invalid && this.formEditPolitica.get('descripcion').touched;
  }

  guardarEditPolitica(){
    this.infoPoliticaService.actualizarPolitica(this.politica.politica.id , $('#textarea_editor').val().toString())
    .subscribe(data => {
               this.ngOnInit();
               this.toastr.success('succesful' , 'la politica se actualizo de manera correcta.');
               this.mostrar = !this.mostrar;
    }, error => {
          console.log('error el editar una politica:' + error.message);
          this.toastr.error('error' , error.message);
    });
    }

 }
