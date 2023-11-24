import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./sso-authentication/sso-authentication.module').then(m => m.SsoAuthenticationModule),
    // canActivate: [AuthGuard],
    data: { breadcrumb: {alias : 'Home'}}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule],
  //providers: [AuthGuard]
})
export class AppRoutingModule { }
