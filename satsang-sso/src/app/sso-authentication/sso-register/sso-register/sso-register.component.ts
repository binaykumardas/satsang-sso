import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sso-register',
  templateUrl: './sso-register.component.html',
  styleUrls: ['./sso-register.component.scss'],
})
export class SsoRegisterComponent {
  public registerForm!: FormGroup;
  public loginFormSubmitted: boolean = false;
  public get registerFrms() {
    return this.registerForm.controls;
  }

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.getRegisterForm();
  }

  public getRegisterForm(): void {
    this.registerForm = this._fb.group({
      _fcode: new FormControl('', [
        Validators.required,
        Validators.max(999999999999),
        Validators.min(10000000000),
      ]),
      _fname: new FormControl('', [Validators.required]),
    });
  }

  public userLogin(): void {
    this.loginFormSubmitted = true;
  }
}
