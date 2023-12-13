import { Component, TemplateRef } from '@angular/core';
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
  //modalRef?: BsModalRef;
  public loginFormSubmitted: boolean = false;
  public isPhoneOTPReceived: boolean = false;
  public stepperObj = {
    isStepOneCompleted: true,
    isStepTwoCompleted: false,
    isStepThreeCompleted: false,
    isStepFourCompleted: false
  }
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
      _fname: new FormControl(''),
    });
  }

  public proceedToNext() {
    if(this.stepperObj.isStepOneCompleted) {
      this.stepperObj.isStepOneCompleted = false;
      this.stepperObj.isStepTwoCompleted = true;
      this.stepperObj.isStepThreeCompleted = false;
      this.stepperObj.isStepFourCompleted = false;
    } else if(this.stepperObj.isStepTwoCompleted) {
        this.stepperObj.isStepOneCompleted = false;
        this.stepperObj.isStepTwoCompleted = false;
        this.stepperObj.isStepThreeCompleted = true;
        this.stepperObj.isStepFourCompleted = false;
    } else if(this.stepperObj.isStepThreeCompleted) {
        this.stepperObj.isStepOneCompleted = false;
        this.stepperObj.isStepTwoCompleted = false;
        this.stepperObj.isStepThreeCompleted = false;
        this.stepperObj.isStepFourCompleted = true;
    }

  }

  public sendOTP() {
    this.isPhoneOTPReceived = true;
  }

  public createAccount() {
    //this.modalRef = this.modalService.show(template);
  }

  public userLogin(): void {
    this.loginFormSubmitted = true;
  }
  
}
