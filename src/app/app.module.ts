import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';


import { AppComponent } from './app.component';
import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator.component';
import { PaymentPlanComponent } from './mortgage-calculator/payment-plan/payment-plan.component';
import { PrepaymentPlanComponent } from './mortgage-calculator/prepayment-plan/prepayment-plan.component';
import { CalculationSummaryComponent } from './mortgage-calculator/calculation-summary/calculation-summary.component';
@NgModule({
  declarations: [
    AppComponent,
    MortgageCalculatorComponent,
    PaymentPlanComponent,
    PrepaymentPlanComponent,
    CalculationSummaryComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
