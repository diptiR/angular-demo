import { NgModule } from "@angular/core";

import { LoanComponent } from "./loan.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { LoanCanActivate } from "./loanCanActivate.service";
import { CommonModule } from "@angular/common";
import { LoanCanDeactivate } from "./loanCanDeactivate.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: "", component: LoanComponent },
      { path: "edit", component: LoanComponent, canActivate: [LoanCanActivate], canDeactivate: [LoanCanDeactivate] }
    ])
  ],
  declarations: [LoanComponent],
  exports: [LoanComponent]
})
export class LoanModule {}
