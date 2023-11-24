import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SsoLoginComponent } from './sso-login/sso-login.component';

const ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        // canActivate: [AuthGuard],
        component: SsoLoginComponent,
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class SsoAuthenticationRoutingModule { }
