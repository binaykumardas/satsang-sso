import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SsoRegisterComponent } from './sso-register/sso-register.component';

const routes: Routes = [
  {
    path: '',
    component: SsoRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SsoRegisterRoutingModule {}
