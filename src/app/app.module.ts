import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PipelineComponent } from "./pipeline/pipeline.component";
import { PipelineResolver } from "./pipeline/pipelineResolver.service";
import { LoanComponent } from "./loan/loan.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, PipelineComponent, LoanComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      {
        path: "pipeline",
        component: PipelineComponent,
        resolve: {
          data: PipelineResolver
        }
      },
      {
        path: "loan/:id",
        component: LoanComponent
      },
      { path: "", redirectTo: "home", pathMatch: "full" }
    ])
  ],
  providers: [PipelineResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
