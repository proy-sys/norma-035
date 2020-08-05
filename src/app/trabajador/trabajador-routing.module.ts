import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabajadorComponent } from './trabajador.component';
import { EncuestaPoliComponent } from './pages/encuestas/encuesta-poli/encuesta-poli.component';
import { EncuestaInstComponent } from './pages/encuestas/encuesta-inst/encuesta-inst.component';
import { EncuestaGuia2Component } from './pages/encuestas/encuesta-guia2/encuesta-guia2.component';
import { EncuestaGuia1Component } from './pages/encuestas/encuesta-guia1/encuesta-guia1.component';
import { EncuestaGuia3Component } from './pages/encuestas/encuesta-guia3/encuesta-guia3.component';


const routes: Routes = [
 // { path: '', component: TrabajadorComponent },
  { path: '', component: EncuestaPoliComponent },
  { path: 'encuesta-poli', component: EncuestaPoliComponent },
  { path: 'encuesta-inst', component: EncuestaInstComponent},
  { path: 'encuesta-guia2', component: EncuestaGuia2Component },
  { path: 'encuesta-guia1', component: EncuestaGuia1Component },
  { path: 'encuesta-guia3', component: EncuestaGuia3Component },
  { path: '**', pathMatch: 'full', redirectTo: 'encuesta-poli' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class TrabajadorRoutingModule { }
