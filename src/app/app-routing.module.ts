import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanAdminGuard } from './auth/guards/can-admin.guard';
import { CanTrabajadorGuard } from './auth/guards/can-trabajador.guard';
import { CanLoginGuard } from './auth/guards/can-login.guard';

const routes: Routes = [

    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full',
    },

    {
      path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule),
      canActivate: [CanLoginGuard]
    },
    {
      path: 'administrador', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
      canActivate: [CanAdminGuard]
    },
    {
      path: 'trabajador', loadChildren: () => import('./trabajador/trabajador.module').then(m => m.TrabajadorModule),
      canActivate: [CanTrabajadorGuard]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];


@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
