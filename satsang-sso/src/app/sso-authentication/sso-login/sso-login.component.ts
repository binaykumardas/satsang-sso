import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sso-login',
  templateUrl: './sso-login.component.html',
  styleUrls: ['./sso-login.component.scss']
})
export class SsoLoginComponent implements OnInit {

  public loginForm!:FormGroup;
  public loginFormSubmitted:boolean = false;
  public get logInFrms(){
    return this.loginForm.controls;
  }

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.getLoginForm();
  }

  public getLoginForm():void {
    this.loginForm = this._fb.group({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  public userLogin(): void {
    this.loginFormSubmitted = true;
  }


}
