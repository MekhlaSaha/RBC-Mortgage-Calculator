import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { MortgageCalculatorService } from './mortgage-calculator.service';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent implements OnInit, AfterViewInit {
  @ViewChild('paymentPlan', { static: false }) paymentPlan: any;
  @ViewChild('prepaymentPlan', { static: false }) prepaymentPlan: any;
  constructor(private mortgageCalculatorService: MortgageCalculatorService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.onCalculate();
  }
  onCalculate(): void {
    if (this.isFormValid(this.paymentPlan?.paymentPlanForm) &&
      this.isFormValid(this.prepaymentPlan?.prepaymentPlanForm)) {
      this.mortgageCalculatorService.mortgageCalculatorSubject.next(
        {
          paymentPlan: this.paymentPlan?.paymentPlanForm.value,
          prepaymentPlan: this.prepaymentPlan?.prepaymentPlanForm.value
        });
    }
  }

  isFormValid(form: FormGroup|undefined): boolean {
    return form?.status === 'VALID';
  }

}
