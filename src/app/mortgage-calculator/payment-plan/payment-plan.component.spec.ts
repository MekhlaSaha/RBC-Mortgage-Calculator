/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaymentPlanComponent } from './payment-plan.component';
import { MockModule } from 'ng-mocks';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('PaymentPlanComponent', () => {
  let component: PaymentPlanComponent;
  let fixture: ComponentFixture<PaymentPlanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule,
        MockModule(MatSelectModule),
        MockModule(MatFormFieldModule),
        MockModule(ReactiveFormsModule)
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [PaymentPlanComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
