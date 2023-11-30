import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsoRegisterComponent } from './sso-register.component';

describe('SsoRegisterComponent', () => {
  let component: SsoRegisterComponent;
  let fixture: ComponentFixture<SsoRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SsoRegisterComponent]
    });
    fixture = TestBed.createComponent(SsoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
