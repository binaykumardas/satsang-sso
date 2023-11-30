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
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./sso-register/sso-register.module').then(
            (m) => m.SsoRegisterModule
          ),
      },
      {
        path: 'reset',
        loadChildren: () =>
          import('./sso-reset-pwd/sso-reset-pwd.module').then(
            (m) => m.SsoResetPwdModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class SsoAuthenticationRoutingModule {}
