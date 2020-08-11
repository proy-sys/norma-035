
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CanAdminGuard } from './auth/guards/can-admin.guard';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ContentComponent } from './shared/content/content.component';
import { CanTrabajadorGuard } from './auth/guards/can-trabajador.guard';
import { CanLoginGuard } from './auth/guards/can-login.guard';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
  ],
  imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        BrowserAnimationsModule,
        ChartsModule,
        ToastrModule.forRoot({
            timeOut: 1000,
             preventDuplicates: false,
       })
  ],
  providers: [CanAdminGuard, CanTrabajadorGuard, CanLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

