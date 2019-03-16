import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { LoanComponent } from "./loan.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [LoanComponent],
  exports: [LoanComponent]
})

export class LoanModule {}
