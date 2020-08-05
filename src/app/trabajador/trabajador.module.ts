import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrabajadorRoutingModule } from './trabajador-routing.module';
import { TrabajadorComponent } from './trabajador.component';
import { EncuestaPoliComponent } from './pages/encuestas/encuesta-poli/encuesta-poli.component';
import { EncuestaInstComponent } from './pages/encuestas/encuesta-inst/encuesta-inst.component';
import { EncuestaGuia2Component } from './pages/encuestas/encuesta-guia2/encuesta-guia2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EncuestaGuia3Component } from './pages/encuestas/encuesta-guia3/encuesta-guia3.component';
import { EncuestaGuia1Component } from './pages/encuestas/encuesta-guia1/encuesta-guia1.component';


@NgModule({
  declarations: [TrabajadorComponent,
                 EncuestaPoliComponent,
                 EncuestaInstComponent,
                 EncuestaGuia2Component,
                 EncuestaGuia3Component,
                 EncuestaGuia1Component],
  imports: [
    TrabajadorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
   bootstrap: [TrabajadorComponent]
})
export class TrabajadorModule { }
