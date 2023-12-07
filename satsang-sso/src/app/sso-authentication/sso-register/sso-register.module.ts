import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsoRegisterRoutingModule } from './sso-register-routing.module';
import { SsoRegisterComponent } from './sso-register/sso-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SsoRegisterComponent],
  imports: [
    CommonModule,
    SsoRegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SsoRegisterModule {}
