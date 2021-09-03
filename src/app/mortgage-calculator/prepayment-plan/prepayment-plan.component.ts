import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-prepayment-plan',
  templateUrl: './prepayment-plan.component.html',
  styleUrls: ['./prepayment-plan.component.css']
})
export class PrepaymentPlanComponent implements OnInit {
  amortizationYears = [...Array(31).keys()].slice(1);
  amortizationMonths = [...Array(12).keys()].slice(1);
  prepaymentFrequencies = ['One time', 'Each year'];
  termList = [...Array(11).keys()].slice(1);

  prepaymentPlanForm = new FormGroup({
    prepaymentAmount: new FormControl('1000000', Validators.required),
    prepaymentFrequency: new FormControl(this.prepaymentFrequencies[0], Validators.required),
    payment: new FormControl(24, Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }

}
