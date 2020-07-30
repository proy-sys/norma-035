import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './pages/empresa/empresa-info/empresa.component';
import { EmpresaEditComponent } from './pages/empresa/empresa-edit/empresa-edit.component';
import { ReporteComponent } from './pages/reportes/reporte.component';
import { PoliticasComponent } from './pages/politicas/politica-list/politicas.component';
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

const appRoutes: Routes = [
  { path: '', component: EmpresaComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'empresa-edit', component: EmpresaEditComponent },
  { path: 'reportes', component: ReporteComponent },
  { path: 'politicas', component: PoliticasComponent },
  { path: 'politicas-info-edit/:id', component: PoliticaInfoEditComponent},
  { path: 'sugerencias', component: SugerenciasComponent },
  { path: 'sugerenciasadd', component: SugerenciasAddComponent },
  { path: 'trabajadores', component: TrabajadoresComponent },
  { path: 'trabajadoresadd', component: TrabajadoresAddComponent },
  { path: 'trabajadoresedit/:id', component: TrabajadoresEditComponent },
  { path: 'guia1a', component: Guia1AdminComponent },
  { path: 'guia2a', component: Guia2AdminComponent },
  { path: 'guia3a', component: Guia3AdminComponent },
  { path: 'guia1', component: Guia1Component },
  { path: 'guia2', component: Guia2Component },
  { path: 'guia3', component: Guia3Component },
  { path: 'actividades', component: ActividadesComponent },
  { path: 'actividadesadd', component: ActividadesAddComponent},
  { path: 'actividadesedit/:id', component: ActividadesEditComponent },
  { path: 'documentos', component: DocumentosComponent},
  { path: 'documentosadd', component: DocumentosAddComponent},
  { path: 'documentosupload/:id', component: DocumentosUploadComponent},
  { path: 'documentosedit/:id', component: DocumentosEditComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'empresa' }
];

@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes, { useHash: true } )
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
