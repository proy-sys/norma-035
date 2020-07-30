import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';


const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot( appRoutes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
