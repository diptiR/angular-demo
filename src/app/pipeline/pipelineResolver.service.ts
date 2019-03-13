import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Loan } from "../interface/loan.interface";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PipelineResolver implements Resolve<Loan[]> {
  constructor(private http: HttpClient) {}
  resolve(): Observable<Loan[]> {
    const url = "../api/loans.json";
    return this.http.get<Loan[]>(url);
  }
}
