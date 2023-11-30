import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SsoResetPwdComponent } from './sso-reset-pwd/sso-reset-pwd.component';

const routes: Routes = [
  {
    path: '',
    component: SsoResetPwdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SsoResetPwdRoutingModule {}
