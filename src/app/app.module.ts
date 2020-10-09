
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CanAdminGuard } from './auth/guards/can-admin.guard';
import { CanTrabajadorGuard } from './auth/guards/can-trabajador.guard';
import { CanLoginGuard } from './auth/guards/can-login.guard';
import { AdminModule } from './admin/admin.module';
import { FormsModule } from '@angular/forms';
import { TrabajadorModule } from './trabajador/trabajador.module';

import { ChartsModule } from 'ng2-charts';
import { AuthInterceptorService } from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        AdminModule,
        TrabajadorModule,
        BrowserAnimationsModule,
        ChartsModule,
        ToastrModule.forRoot({
            timeOut: 2000,
             preventDuplicates: false,
       })
  ],
  exports: [],
  providers: [
              CanAdminGuard,
              CanTrabajadorGuard,
              CanLoginGuard,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptorService,
                multi: true
              }
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }

