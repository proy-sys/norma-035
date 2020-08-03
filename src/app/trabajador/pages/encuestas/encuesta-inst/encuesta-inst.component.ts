import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuesta-inst',
  templateUrl: './encuesta-inst.component.html',
  styleUrls: ['./encuesta-inst.component.sass']
})
export class EncuestaInstComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }

  irGuia2(){
      this.ruta.navigate(['trabajador/encuesta-guia2']);
  }
}
