import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SummaryComponent } from './loan-form/summary/summary.component'
import { LoanComponent } from "./loan.component";
import { BorrowerComponent } from './loan-form/borrower/borrower.component';
import { LoanResolver } from './loan-resolve.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: "",
        component: LoanComponent,
        children: [
          { path: "summary", component: SummaryComponent },
          { path: "borrower", component: BorrowerComponent },
          { path: "", redirectTo: "summary", pathMatch: "full" },
        ]
      },
    ])
  ],
  declarations: [
    SummaryComponent,
    LoanComponent,
    BorrowerComponent
  ]
})
export class LoanFormsModule { }
