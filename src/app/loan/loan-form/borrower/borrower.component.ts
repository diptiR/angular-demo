import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'pm-borrower',
  templateUrl: './borrower.component.html',
  styleUrls: ['./borrower.component.css']
})
export class BorrowerComponent implements OnInit {

  borrowerForm: FormGroup = new FormGroup({
      firstName: new FormControl("")
  });

  constructor() { }

  ngOnInit() {
    this.borrowerForm.disable();
  }

}
