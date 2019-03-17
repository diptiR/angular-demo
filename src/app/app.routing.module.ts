import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { PipelineComponent } from "./modules/pipeline/pipeline.component";
import { HomeComponent } from "./modules/home/home.component";
import { LoanCanLoad } from "./modules/pipeline/modules/loan/loanCanLoad.service";

const appRoutes = [
  { path: "home", component: HomeComponent },
  {
    path: "loan/:id",
    loadChildren: "./modules/pipeline/modules/loan/loan.module#LoanModule",
    canLoad: [LoanCanLoad]
  },
  {
    path: "pipeline",
    component: PipelineComponent
  },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
