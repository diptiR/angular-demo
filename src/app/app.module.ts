import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PipelineComponent } from "./pipeline/pipeline.component";
import { PipelineResolver } from "./pipeline/pipelineResolver.service";
import { LoanCanLoad } from "./loan/loanCanLoad";

@NgModule({
  declarations: [AppComponent, HomeComponent, PipelineComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      {
        path: "loan/:id",
        loadChildren: './loan/loan-forms.module#LoanFormsModule',
        canLoad: [LoanCanLoad]
      },
      {
        path: "pipeline",
        component: PipelineComponent,
        resolve: {
          data: PipelineResolver
        }
      },
      { path: "", redirectTo: "home", pathMatch: "full" }
    ])
  ],
  providers: [PipelineResolver, LoanCanLoad],
  bootstrap: [AppComponent]
})
export class AppModule { }
