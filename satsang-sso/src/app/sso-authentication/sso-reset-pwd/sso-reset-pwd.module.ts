import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsoResetPwdRoutingModule } from './sso-reset-pwd-routing.module';
import { SsoResetPwdComponent } from './sso-reset-pwd/sso-reset-pwd.component';


@NgModule({
  declarations: [
    SsoResetPwdComponent
  ],
  imports: [
    CommonModule,
    SsoResetPwdRoutingModule
  ]
})
export class SsoResetPwdModule { }
