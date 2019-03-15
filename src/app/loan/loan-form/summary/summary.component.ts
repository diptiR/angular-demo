import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Loan } from "../../../interface/loan.interface";

@Component({
  selector: 'pm-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  currentLoan: Loan;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.parent.data.subscribe(
      (response) => {
        this.currentLoan = <Loan>response.loan;
      }
    )
  }

}
