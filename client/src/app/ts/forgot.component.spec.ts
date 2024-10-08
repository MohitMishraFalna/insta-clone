import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotComponent } from '../account/forgot/forgot.component';

describe('ForgotComponent', () => {
  let component: ForgotComponent;
  let fixture: ComponentFixture<ForgotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotComponent]
    });
    fixture = TestBed.createComponent(ForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
