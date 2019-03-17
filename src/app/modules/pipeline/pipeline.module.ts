import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { PipelineComponent } from "./pipeline.component";
import { PipelineDataService } from "./pipeline-data.service";

@NgModule({
  imports: [BrowserModule, RouterModule, HttpClientModule],
  declarations: [PipelineComponent],
  exports: [PipelineComponent],
  providers: [PipelineDataService]
})
export class PipelineModule {}
