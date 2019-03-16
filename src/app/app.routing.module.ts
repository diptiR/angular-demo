import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AddLoanComponent } from "./add-loan/add-loan.component";
import { LoanCanLoad } from "./loan/loanCanLoad";
import { PipelineComponent } from "./modules/pipeline/pipeline.component";
import { PipelineResolver } from "./modules/pipeline/pipelineResolver.service";
import { HomeComponent } from "./modules/home/home.component";

const appRoutes = [
  { path: "home", component: HomeComponent },
  //   {
  //     path: "loan/:id",
  //     loadChildren: "./loan/loan-forms.module#LoanFormsModule",
  //     canLoad: [LoanCanLoad]
  //   },
  {
    path: "pipeline",
    component: PipelineComponent,
    resolve: {
      data: PipelineResolver
    }
  },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
