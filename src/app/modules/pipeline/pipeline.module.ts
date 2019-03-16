import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { PipelineComponent } from "./pipeline.component";

@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [PipelineComponent],
  exports: [PipelineComponent]
})

export class PipelineModule {}
