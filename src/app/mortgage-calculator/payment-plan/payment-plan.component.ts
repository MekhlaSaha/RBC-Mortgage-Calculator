import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-plan',
  templateUrl: './payment-plan.component.html',
  styleUrls: ['./payment-plan.component.css']
})
export class PaymentPlanComponent implements OnInit {
  amortizationYears = [...Array(31).keys()].slice(1);
  amortizationMonths = [...Array(12).keys()].slice(1);
  paymentFrequencies = ['Monthly', 'Weekly'];
  termList = [...Array(11).keys()].slice(1);

  paymentPlanForm = new FormGroup({
    mortgageAmount: new FormControl('1000000', Validators.required),
    interestRate: new FormControl('3', Validators.required),
    amortizationYears: new FormControl(24, Validators.required),
    amortizationMonths: new FormControl(),
    paymentFrequency: new FormControl(this.paymentFrequencies[0], Validators.required),
    term: new FormControl(5)
  });
  constructor() { }

  ngOnInit(): void {
  }

}
