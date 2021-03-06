import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/authen/authen.module').then(mod => mod.AuthenModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./modules/logout/logout.module').then(mod => mod.LogoutModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'webonline',
    loadChildren: () => import('./modules/webonline/webonline.module').then(mod => mod.WebonlineModule)
  },
  {
    path: 'oauth2/callback',
    loadChildren: () => import('./modules/callback/callback.module').then(mod => mod.CallbackModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
