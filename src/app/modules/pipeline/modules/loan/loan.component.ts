import { Component, OnInit } from "@angular/core";
import { PipelineDataService } from "../../pipeline-data.service";
import { ActivatedRoute, Router, UrlSegment } from "@angular/router";
import { Loan } from "src/app/common/interface/loan.interface";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  templateUrl: "./loan.component.html",
  styleUrls: ["./loan.scss"]
})
export class LoanComponent implements OnInit {
  loan: Loan = new Loan();
  isEdit: boolean = false;
  loanform = this.fb.group({
    prefix: [{ value: "", disabled: !this.isEdit }],
    borrowerFirstName: [{ value: "", disabled: !this.isEdit }],
    borrowerMiddleName: [{ value: "", disabled: !this.isEdit }],
    borrowerLastName: [{ value: "", disabled: !this.isEdit }],
    rateOfInterest: [{ value: "", disabled: !this.isEdit }],
    loanAmt: [{ value: "", disabled: !this.isEdit }],
    emiAmt: [{ value: "", disabled: !this.isEdit }],
    balanceAmt: [{ value: "", disabled: !this.isEdit }]
  });

  constructor(
    private pipelineDataService: PipelineDataService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  goBack(): void {
    this.router.navigate(["pipeline"]);
  }

  enableControls(value: boolean){
    if(value){
      this.loanform.get("prefix").enable();
      this.loanform.get("borrowerFirstName").enable();
      this.loanform.get("borrowerMiddleName").enable();
      this.loanform.get("borrowerLastName").enable();
      this.loanform.get("rateOfInterest").enable();
      this.loanform.get("loanAmt").enable();
      this.loanform.get("emiAmt").enable();
      this.loanform.get("balanceAmt").enable();
    } else{
      this.loanform.get("prefix").disable();
      this.loanform.get("borrowerFirstName").disable();
      this.loanform.get("borrowerMiddleName").disable();
      this.loanform.get("borrowerLastName").disable();
      this.loanform.get("rateOfInterest").disable();
      this.loanform.get("loanAmt").disable();
      this.loanform.get("emiAmt").disable();
      this.loanform.get("balanceAmt").disable();
    }
    
  }

  ngOnInit() {

    this.activatedRoute.url.subscribe(UrlSegment => {
      this.isEdit = UrlSegment[0] && UrlSegment[0].path === "edit";
      this.enableControls(this.isEdit);
      
    })

    this.activatedRoute.params.subscribe(params => {
      this.pipelineDataService.getLoan(params.id).subscribe(response => {
        this.loan = <Loan>response;
        this.loanform.setValue({
          prefix: this.loan.prefix,
          borrowerFirstName: this.loan.borrowerFirstName,
          borrowerMiddleName: this.loan.borrowerMiddleName,
          borrowerLastName: this.loan.borrowerLastName,
          rateOfInterest: this.loan.rateOfInterest,
          loanAmt: this.loan.loanAmt,
          emiAmt: this.loan.emiAmt,
          balanceAmt: this.loan.balanceAmt
        });
      });
    });
  }
}
