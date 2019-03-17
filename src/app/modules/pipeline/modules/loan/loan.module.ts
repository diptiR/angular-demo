import { NgModule } from "@angular/core";

import { LoanComponent } from "./loan.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [RouterModule.forChild([{ path: "", component: LoanComponent }])],
  declarations: [LoanComponent],
  exports: [LoanComponent]
})
export class LoanModule {}
