import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsoAuthenticationRoutingModule } from './sso-authentication-routing.module';
import { SsoLoginComponent } from './sso-login/sso-login.component';


@NgModule({
  declarations: [
    SsoLoginComponent
  ],
  imports: [
    CommonModule,
    SsoAuthenticationRoutingModule
  ]
})
export class SsoAuthenticationModule { }
