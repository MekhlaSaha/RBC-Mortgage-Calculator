/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MortgageCalculatorComponent } from './mortgage-calculator.component';
import { PaymentPlanComponent } from './payment-plan/payment-plan.component';
import { PrepaymentPlanComponent } from './prepayment-plan/prepayment-plan.component';
import { CalculationSummaryComponent } from './calculation-summary/calculation-summary.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockModule, MockProvider } from 'ng-mocks';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MortgageCalculatorService } from './mortgage-calculator.service';
import { Subject } from 'rxjs';

describe('MortgageCalculatorComponent', () => {
  let component: MortgageCalculatorComponent;
  let fixture: ComponentFixture<MortgageCalculatorComponent>;
  let mortgageCalculatorService: any;
  const mortgageCalculatorServiceValue = {
    mortgageCalculatorSubject: new Subject()
  };
  let mortgageCalcSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule,
        MockModule(ReactiveFormsModule),
        MockModule(MatTableModule)],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        MortgageCalculatorComponent,
        PaymentPlanComponent,
        PrepaymentPlanComponent,
        CalculationSummaryComponent
      ],
      providers: [{ provide: MortgageCalculatorService, useValue: mortgageCalculatorServiceValue }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    mortgageCalculatorService = TestBed.inject(MortgageCalculatorService);
    mortgageCalcSpy = spyOn(mortgageCalculatorServiceValue.mortgageCalculatorSubject, 'next');
    fixture = TestBed.createComponent(MortgageCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onCalculate', () => {
    it('should call next', () => {
      component.paymentPlan = {
        paymentPlanForm: {
          value: {}
        }
      };
      component.prepaymentPlan = {
        prepaymentPlanForm: {
          value: {}
        }
      };
      component.onCalculate();
      expect(mortgageCalcSpy).toHaveBeenCalled();
      mortgageCalculatorServiceValue.mortgageCalculatorSubject.subscribe(response => {
        expect(response).toBeDefined();
      });
    });
  });

  describe('isFormValid', () => {
    it('should return true when the form is valid', () => {
      const form = new FormGroup({});
      expect(component.isFormValid(form)).toBeTrue();
    });
    it('should return false when the form is invalid', () => {
      const form = new FormGroup({});
      form.setErrors({});
      expect(component.isFormValid(form)).toBeFalse();
    });
  });
});
