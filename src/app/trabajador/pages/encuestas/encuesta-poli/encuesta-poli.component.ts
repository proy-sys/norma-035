import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuesta-poli',
  templateUrl: './encuesta-poli.component.html',
  styleUrls: ['./encuesta-poli.component.sass']
})
export class EncuestaPoliComponent implements OnInit {

  constructor( private ruta: Router ) { }

  ngOnInit(): void {
  }

  irIntrucciones() {
    this.ruta.navigate(['trabajador/encuesta-inst']);
  }

}
