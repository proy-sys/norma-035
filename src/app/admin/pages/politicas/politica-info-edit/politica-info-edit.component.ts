import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { InfoPoliticaService } from 'src/app/services/info-politica.service';

@Component({
  selector: 'app-politica-info-edit',
  templateUrl: './politica-info-edit.component.html',
  styleUrls: ['./politica-info-edit.component.sass']
})
export class PoliticaInfoEditComponent implements OnInit { 

  politica: any = {};
  formEditPolitica: FormGroup;
  constructor( private infoPoliticaService: InfoPoliticaService,
               private ruta: Router,
               private fb: FormBuilder,
               private activatedRoute: ActivatedRoute ) {

     }

  ngOnInit(): void {
    this.cargarPolitica();
    this.crearFormulario();
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
  visible(){
     document.getElementById('editor').style.display = 'block';
  }
  contenido(pol: string){
        $('#textarea_editor').val(pol);
  }
  get descripcionNoValido() {
    return this.formEditPolitica.get('descripcion').invalid && this.formEditPolitica.get('descripcion').touched;
  }

  guardarEditPolitica(){
    this.infoPoliticaService.actualizarPolitica(this.politica.politica.id , $('#textarea_editor').val().toString())
    .subscribe(data => {
               this.ngOnInit();
    }, error => {
          console.log('error el editar una politica:' + error.message);
    });
    }
 }
