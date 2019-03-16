import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Loan } from '../interface/loan.interface';

@Component({
  selector: 'pm-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss']
})
export class PipelineComponent implements OnInit {
  loans: Loan[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  loanClicked(id: string) {
    this.router.navigate(['loan', id]);
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(response => {
      this.loans = <Loan[]>response.data.loans;
    });
  }
}
