import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabajadorComponent } from './trabajador.component';
import { EncuestaPoliComponent } from './pages/encuestas/encuesta-poli/encuesta-poli.component';
import { EncuestaInstComponent } from './pages/encuestas/encuesta-inst/encuesta-inst.component';
import { EncuestaGuia2Component } from './pages/encuestas/encuesta-guia2/encuesta-guia2.component';
import { EncuestaGuia3Component } from './pages/encuestas/encuesta-guia3/encuesta-guia3.component';
import { FinalizarComponent } from './pages/finalizar/finalizar.component';
import { Seccion1Component } from './pages/encuestas/encuesta-guia1/seccion-uno/seccion1.component';
import { SeccionGeneralComponent } from './pages/encuestas/encuesta-guia1/seccion-general/seccion-general.component';
import { BuzonComponent } from './pages/buzon/buzon.component';


const routes: Routes = [
 // { path: '', component: TrabajadorComponent },
  { path: '', component: EncuestaPoliComponent },
  { path: 'encuesta-poli', component: EncuestaPoliComponent },
  { path: 'encuesta-guia1-seccion-1', component: Seccion1Component},
  { path: 'encuesta-guia1-seccion/:con', component:  SeccionGeneralComponent},
  { path: 'encuesta-inst/:id', component: EncuestaInstComponent},
  { path: 'encuesta-guia2', component: EncuestaGuia2Component },
  { path: 'encuesta-guia3', component: EncuestaGuia3Component },
  { path: 'finalizar', component: FinalizarComponent },
  { path: 'buzon', component: BuzonComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'encuesta-poli' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class TrabajadorRoutingModule { }
