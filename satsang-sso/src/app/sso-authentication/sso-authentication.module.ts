import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsoAuthenticationRoutingModule } from './sso-authentication-routing.module';
import { SsoLoginComponent } from './sso-login/sso-login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [SsoLoginComponent],
  imports: [
    CommonModule,
    SsoAuthenticationRoutingModule,
    // MatInputModule
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class SsoAuthenticationModule {}
