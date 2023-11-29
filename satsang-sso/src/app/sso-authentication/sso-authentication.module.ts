import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsoAuthenticationRoutingModule } from './sso-authentication-routing.module';
import { SsoLoginComponent } from './sso-login/sso-login.component';
// import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [SsoLoginComponent],
  imports: [
    CommonModule,
    SsoAuthenticationRoutingModule,
    // MatInputModule
  ],
})
export class SsoAuthenticationModule {}
