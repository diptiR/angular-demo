import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { SummaryComponent } from './loan-form/summary/summary.component'
import { LoanComponent } from "./loan.component";
import { BorrowerComponent } from './loan-form/borrower/borrower.component';
import { LoanResolver } from './loan-resolve.service';
import { MortgageComponent } from './loan-form/mortgage/mortgage.component';
import { RepaymentComponent } from './loan-form/repayment/repayment.component';
import { InstallmentComponent } from './loan-form/installment/installment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: "",
        component: LoanComponent,
        children: [
          { path: "summary", component: SummaryComponent },
          { path: "borrower", component: BorrowerComponent },
          { path: "mortgage", component: MortgageComponent },
          { path: "repayment", component: RepaymentComponent },
          { path: "installment", component: InstallmentComponent },
          { path: "", redirectTo: "summary", pathMatch: "full" },
        ],
        resolve: {
          loan: LoanResolver
        }
      },
    ])
  ],
  declarations: [
    SummaryComponent,
    LoanComponent,
    BorrowerComponent,
    MortgageComponent,
    RepaymentComponent,
    InstallmentComponent
  ],
  providers: [LoanResolver]
})
export class LoanFormsModule { }
