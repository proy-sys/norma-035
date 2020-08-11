import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './pages/empresa/empresa-info/empresa.component';
import { PoliticasComponent } from './pages/politicas/politica-list/politicas.component';
import { EmpresaEditComponent } from './pages/empresa/empresa-edit/empresa-edit.component';
import { PoliticaInfoEditComponent } from './pages/politicas/politica-info-edit/politica-info-edit.component';
import { SugerenciasComponent } from './pages/sugerencias/sugerencias-list/sugerencias.component';
import { SugerenciasAddComponent } from './pages/sugerencias/sugerencias-add/sugerencias-add.component';
import { TrabajadoresComponent } from './pages/trabajadores/trabajadores-list/trabajadores.component';
import { TrabajadoresAddComponent } from './pages/trabajadores/trabajadores-add/trabajadores-add.component';
import { TrabajadoresEditComponent } from './pages/trabajadores/trabajadores-edit/trabajadores-edit.component';
import { Guia1AdminComponent } from './pages/guia1-admin/guia1-admin.component';
import { Guia2AdminComponent } from './pages/guia2-admin/guia2-admin.component';
import { Guia3AdminComponent } from './pages/guia3-admin/guia3-admin.component';
import { Guia1Component } from './pages/guia1/guia1.component';
import { Guia2Component } from './pages/guia2/guia2.component';
import { Guia3Component } from './pages/guia3/guia3.component';
import { ActividadesComponent } from './pages/actividades/actividades-list/actividades.component';
import { ActividadesAddComponent } from './pages/actividades/actividades-add/actividades-add.component';
import { ActividadesEditComponent } from './pages/actividades/actividades-edit/actividades-edit.component';
import { DocumentosComponent } from './pages/documentos/documentos-list/documentos.component';
import { DocumentosAddComponent } from './pages/documentos/documentos-add/documentos-add.component';
import { DocumentosUploadComponent } from './pages/documentos/documentos-upload/documentos-upload.component';
import { DocumentosEditComponent } from './pages/documentos/documentos-edit/documentos-edit.component';
import { EstadisticaComponent } from './pages/estadistica/estadistica.component';
import { Guia1ListComponent } from './reports/results-guia1/guia1-list/guia1-list.component';
import { Guia1ResultComponent } from './reports/results-guia1/guia1-result/guia1-result.component';
import { Guia2ListComponent } from './reports/results-guia2/guia2-list/guia2-list.component';
import { Guia3ListComponent } from './reports/results-guia3/guia3-list/guia3-list.component';
import { Guia2ResultComponent } from './reports/results-guia2/guia2-result/guia2-result.component';
import { Guia3ResultComponent } from './reports/results-guia3/guia3-result/guia3-result.component';
import { Guia2OpcionesComponent } from './statistics/graphics-guia2/guia2-opciones/guia2-opciones.component';
import { Guia2GeneralComponent } from './statistics/graphics-guia2/guia2-general/guia2-general.component';
import { Guia2AmbienteComponent } from './statistics/graphics-guia2/guia2-ambiente/guia2-ambiente.component';
import { Guia2FactoresComponent } from './statistics/graphics-guia2/guia2-factores/guia2-factores.component';


const routes: Routes = [
  { path: '', component: EmpresaComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'empresa-edit', component: EmpresaEditComponent },
  { path: 'politicas', component: PoliticasComponent },
  { path: 'politicas-info-edit/:id', component: PoliticaInfoEditComponent},
  { path: 'sugerencias', component: SugerenciasComponent},
  { path: 'sugerenciasadd', component: SugerenciasAddComponent},
  { path: 'trabajadores', component: TrabajadoresComponent},
  { path: 'trabajadoresadd', component: TrabajadoresAddComponent},
  { path: 'trabajadoresedit/:id', component: TrabajadoresEditComponent },
  { path: 'guia1a', component: Guia1AdminComponent },
  { path: 'guia2a', component: Guia2AdminComponent },
  { path: 'guia3a', component: Guia3AdminComponent },
  { path: 'guia1', component: Guia1Component },
  { path: 'guia2', component: Guia2Component },
  { path: 'guia3', component: Guia3Component },
  { path: 'estadisticas', component: EstadisticaComponent },
  { path: 'actividades', component: ActividadesComponent },
  { path: 'actividadesadd', component: ActividadesAddComponent},
  { path: 'actividadesedit/:id', component: ActividadesEditComponent },
  { path: 'documentos', component: DocumentosComponent},
  { path: 'documentosadd', component: DocumentosAddComponent},
  { path: 'documentosupload/:id', component: DocumentosUploadComponent},
  { path: 'documentosedit/:id', component: DocumentosEditComponent},
  { path: 'guia1-list', component: Guia1ListComponent},
  { path: 'guia1-result/:id', component: Guia1ResultComponent},
  { path: 'guia2-list', component: Guia2ListComponent},
  { path: 'guia2-result/:id', component: Guia2ResultComponent},
  { path: 'guia3-list', component: Guia3ListComponent},
  { path: 'guia3-result/:id', component: Guia3ResultComponent},
  { path: 'guia2-opciones', component: Guia2OpcionesComponent},
  { path: 'guia2-general', component: Guia2GeneralComponent},
  { path: 'guia2-ambiente', component: Guia2AmbienteComponent},
  { path: 'guia2-factores', component: Guia2FactoresComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'empresa' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
