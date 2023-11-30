import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsoRegisterRoutingModule } from './sso-register-routing.module';
import { SsoRegisterComponent } from './sso-register/sso-register.component';


@NgModule({
  declarations: [
    SsoRegisterComponent
  ],
  imports: [
    CommonModule,
    SsoRegisterRoutingModule
  ]
})
export class SsoRegisterModule { }
