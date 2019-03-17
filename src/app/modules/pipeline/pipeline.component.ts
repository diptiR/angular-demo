import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Loan } from "../../common/interface/loan.interface";
import { PipelineDataService } from "./pipeline-data.service";

@Component({
  selector: "pm-pipeline",
  templateUrl: "./pipeline.component.html",
  styleUrls: ["./pipeline.component.scss"]
})
export class PipelineComponent implements OnInit {
  loans: Loan[] = [];
  response;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pipelineDataService: PipelineDataService
  ) {}

  loanClicked(id: string) {
    this.router.navigate(["loan", id]);
  }

  ngOnInit() {
    this.pipelineDataService.getLoans().subscribe(response => {
      this.response = <Loan[]>response;
    });
  }
}
