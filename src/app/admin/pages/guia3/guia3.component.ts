import { Component, OnInit } from '@angular/core';
import { InfoGuiasService } from 'src/app/services/info-guias.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-guia3',
  templateUrl: './guia3.component.html',
  styleUrls: ['./guia3.component.css']
})
export class Guia3Component implements OnInit {

  formAddGuia3: any;
  radioSelected: any;
  radioOptions = [
    { op: '1'},
    { op: '2'},
    { op: '3'},
    { op: '4'},
    { op: '5'}
  ];

  constructor( public infoGuia3Service: InfoGuiasService )
               {
                 // this.crearFormulario();
               }

  ngOnInit(): void {
  }

  guardarAddGuia3(forma: NgForm) {
    console.log(forma.value);
  }


}
