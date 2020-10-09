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
import { FinalizarComponent } from './pages/finalizar/finalizar.component';
import { Seccion1Component } from './pages/encuestas/encuesta-guia1/seccion-uno/seccion1.component';
import { SeccionGeneralComponent } from './pages/encuestas/encuesta-guia1/seccion-general/seccion-general.component';
import { BuzonComponent } from './pages/buzon/buzon.component';
import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
  declarations: [
                 TrabajadorComponent,
                 EncuestaPoliComponent,
                 EncuestaInstComponent,
                 EncuestaGuia2Component,
                 EncuestaGuia3Component,
                 FinalizarComponent,
                 Seccion1Component,
                 SeccionGeneralComponent,
                 BuzonComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TrabajadorRoutingModule,
    HttpClientModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
  ],
   bootstrap: [TrabajadorComponent],
   exports: [TrabajadorComponent]
})
export class TrabajadorModule { }
