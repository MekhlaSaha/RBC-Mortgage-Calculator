/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrepaymentPlanComponent } from './prepayment-plan.component';
import { MockModule } from 'ng-mocks';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('PrepaymentPlanComponent', () => {
  let component: PrepaymentPlanComponent;
  let fixture: ComponentFixture<PrepaymentPlanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule,
        MockModule(MatSelectModule),
        MockModule(MatCardModule),
        MockModule(ReactiveFormsModule)
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [PrepaymentPlanComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaymentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
