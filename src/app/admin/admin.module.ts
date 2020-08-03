import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TrabajadoresComponent } from './pages/trabajadores/trabajadores-list/trabajadores.component';
import { TrabajadoresAddComponent } from './pages/trabajadores/trabajadores-add/trabajadores-add.component';
import { Guia1Component } from './pages/guia1/guia1.component';
import { Guia1AdminComponent } from './pages/guia1-admin/guia1-admin.component';
import { Guia2AdminComponent } from './pages/guia2-admin/guia2-admin.component';
import { Guia3AdminComponent } from './pages/guia3-admin/guia3-admin.component';
import { Guia2Component } from './pages/guia2/guia2.component';
import { Guia3Component } from './pages/guia3/guia3.component';
import { EmpresaComponent } from './pages/empresa/empresa-info/empresa.component';
import { ActividadesComponent } from './pages/actividades/actividades-list/actividades.component';
import { DocumentosComponent } from './pages/documentos/documentos-list/documentos.component';
import { DocumentosAddComponent } from './pages/documentos/documentos-add/documentos-add.component';
import { PoliticasComponent } from './pages/politicas/politica-list/politicas.component';
import { SugerenciasComponent } from './pages/sugerencias/sugerencias-list/sugerencias.component';
import { ActividadesAddComponent } from './pages/actividades/actividades-add/actividades-add.component';
import { EmpresaEditComponent } from './pages/empresa/empresa-edit/empresa-edit.component';
import { TrabajadoresEditComponent } from './pages/trabajadores/trabajadores-edit/trabajadores-edit.component';
import { ActividadesEditComponent } from './pages/actividades/actividades-edit/actividades-edit.component';
import { DocumentosUploadComponent } from './pages/documentos/documentos-upload/documentos-upload.component';
import { DocumentosEditComponent } from './pages/documentos/documentos-edit/documentos-edit.component';
import { PoliticaInfoEditComponent } from './pages/politicas/politica-info-edit/politica-info-edit.component';
import { SugerenciasAddComponent } from './pages/sugerencias/sugerencias-add/sugerencias-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxSummernoteModule} from 'ngx-summernote';
import { EstadisticaComponent } from './pages/estadistica/estadistica.component';

@NgModule({
  declarations:
         [AdminComponent,
          TrabajadoresComponent,
          TrabajadoresAddComponent,
          Guia1Component,
          Guia1AdminComponent,
          Guia2AdminComponent,
          Guia3AdminComponent,
          Guia2Component,
          Guia3Component,
          EmpresaComponent,
          ActividadesComponent,
          DocumentosComponent,
          DocumentosAddComponent,
          SugerenciasComponent,
          PoliticasComponent,
          ActividadesAddComponent,
          EmpresaEditComponent,
          TrabajadoresEditComponent,
          ActividadesEditComponent,
          DocumentosUploadComponent,
          DocumentosEditComponent,
          PoliticaInfoEditComponent,
          SugerenciasAddComponent,
          EstadisticaComponent,
          ],
      imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          AdminRoutingModule,
          HttpClientModule,
          NgxSummernoteModule,
          NgbModule
       ],
       providers: [],
       bootstrap: [AdminComponent]
})
export class AdminModule { }
