/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockProvider, MockModule } from 'ng-mocks';
import { of } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CalculationSummaryComponent } from './calculation-summary.component';
import { MortgageCalculatorService } from '../mortgage-calculator.service';

describe('CalculationSummaryComponent', () => {
  let component: CalculationSummaryComponent;
  let fixture: ComponentFixture<CalculationSummaryComponent>;
  let mortgageCalculatorService;

  beforeEach(waitForAsync(() => {
    mortgageCalculatorService = {
      mortgageCalculatorSubject: of({
        paymentPlan: {
          amortizationMonths: null,
          amortizationYears: '24',
          interestRate: '3',
          mortgageAmount: '1000000.00',
          paymentFrequency: 'Monthly',
          term: '5'
        },
        payment: '24',
        prepaymentAmount: '1000000.00',
        prepaymentFrequency: 'One time'
      })
    };
    TestBed.configureTestingModule({
      imports: [CommonModule,
        MockModule(MatTableModule),
        MockModule(ReactiveFormsModule),
        MockModule(FormsModule)],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [CalculationSummaryComponent],
      providers: [{ provide: MortgageCalculatorService, useValue: mortgageCalculatorService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set the values for datasource', () => {
      component.ngOnInit();
      expect(component.dataSource[0].category).toEqual('Number of Payments');
      expect(component.dataSource[0].term).toEqual('5');
      expect(component.dataSource[0].amortizationPeriod).toEqual('24');
    });
  });
});
