import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { PipelineComponent } from "./pipeline.component";
import { PipelineResolver } from "./pipelineResolver.service";

@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [PipelineComponent],
  exports: [PipelineComponent],
  providers: [PipelineResolver]
})
export class PipelineModule {}
