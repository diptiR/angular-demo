import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app.routing.module";

import { HeaderModule } from "./common/components/modules/header/header.module";
import { FooterModule } from "./common/components/modules/footer/footer.module";

import { PipelineModule } from "./modules/pipeline/pipeline.module";
import { HomeModule } from "./modules/home/home.module";
import { LoanModule } from "./modules/pipeline/modules/loan/loan.module";


import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    PipelineModule,
    HomeModule,
    LoanModule,
    RouterModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
