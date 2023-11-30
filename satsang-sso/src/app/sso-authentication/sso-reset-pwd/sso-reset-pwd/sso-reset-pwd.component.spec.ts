import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsoResetPwdComponent } from './sso-reset-pwd.component';

describe('SsoResetPwdComponent', () => {
  let component: SsoResetPwdComponent;
  let fixture: ComponentFixture<SsoResetPwdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SsoResetPwdComponent]
    });
    fixture = TestBed.createComponent(SsoResetPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
