import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Loan } from "../../../app/common/interface/loan.interface";
import { loanError } from "../../../app/common/interface/error.interface";
import { catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class PipelineDataService {
  constructor(private http: HttpClient) {}

  getLoans(): Observable<Loan[] | loanError> {
    const url: string = "assets/mockapi/loans.json";
    return this.http
      .get<Loan[] | loanError>(url)
      .pipe(catchError(error => this.handleHttpError(error)));
  }

  getLoan(id: string): Observable<Loan[] | loanError> {
    const url: string = "assets/mockapi/loan.json";
    return this.http
      .get<Loan[] | loanError>(url)
      .pipe(catchError(error => this.handleHttpError(error)));
  }

  handleHttpError(error: HttpErrorResponse): Observable<loanError> {
    let loanErr = new loanError();
    loanErr.errorNumber = 100;
    loanErr.message = error.statusText;
    return throwError(loanErr);
  }
}
