import { Component, OnInit, OnDestroy } from '@angular/core';
import { MortgageCalculatorService } from '../mortgage-calculator.service';
import { ISummary } from './summary.interface';


import { Subscription } from 'rxjs';


@Component({
  selector: 'app-calculation-summary',
  templateUrl: './calculation-summary.component.html',
  styleUrls: ['./calculation-summary.component.scss']
})
export class CalculationSummaryComponent implements OnInit, OnDestroy {
  dataSource: ISummary[] = [
    { category: 'Number of Payments', term: '', amortizationPeriod: '' },
    { category: 'Mortgage Payment', term: '', amortizationPeriod: '' },
    { category: 'Prepayment', term: '', amortizationPeriod: '' },
    { category: 'Principal Payments', term: '', amortizationPeriod: '' },
    { category: 'Interest Payments', term: '', amortizationPeriod: '' },
    { category: 'Total Cost', term: '', amortizationPeriod: '' },
    { category: 'Interest Savings with Prepayment Plan', term: '', amortizationPeriod: '' },
  ];
  displayedColumns: string[] = ['category', 'term', 'amortizationPeriod'];
  mortgageCalculatorSub: Subscription | undefined;
  constructor(private mortgageCalculatorService: MortgageCalculatorService) { }

  ngOnInit(): void {
    this.mortgageCalculatorSub = this.mortgageCalculatorService.mortgageCalculatorSubject.subscribe((summary: any) => {
      this.dataSource = [
        {
          category: 'Number of Payments',
          term: summary.paymentPlan?.term,
          amortizationPeriod: summary.paymentPlan?.amortizationYears
        },
        {
          category: 'Mortgage Payment',
          term: summary.paymentPlan?.term * +summary.paymentPlan?.mortgageAmount * +summary.paymentPlan?.interestRate,
          amortizationPeriod: summary.paymentPlan.amortizationYears
        },
        {
          category: 'Prepayment',
          term: summary.prepaymentPlan?.prepaymentAmount,
          amortizationPeriod: summary.prepaymentPlan?.prepaymentAmount
        },
        {
          category: 'Principal Payments',
          term: summary.paymentPlan?.mortgageAmount * 5 / 100,
          amortizationPeriod: summary.paymentPlan?.mortgageAmount
        },
        {
          category: 'Interest Payments',
          term: ((+summary.paymentPlan?.mortgageAmount *
            +summary.paymentPlan.interestRate) /
            (12 * summary.paymentPlan.amortizationYears)).toFixed(2),
          amortizationPeriod: summary.paymentPlan.amortizationYears
        },
        {
          category: 'Total Cost',
          term: +summary.paymentPlan?.mortgageAmount + +summary.prepaymentPlan?.prepaymentAmount,
          amortizationPeriod: summary.prepaymentPlan?.prepaymentAmount
        },
        {
          category: 'Interest Savings with Prepayment Plan',
          term: +summary.paymentPlan?.mortgageAmount + +summary.prepaymentPlan?.prepaymentAmount,
          amortizationPeriod: summary.prepaymentPlan?.prepaymentAmount
        },
      ];
    });
  }

  ngOnDestroy(): void {
    this.mortgageCalculatorSub?.unsubscribe();
  }

}
