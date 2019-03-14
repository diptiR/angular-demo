import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { HttpClient } from '@angular/common/http';

import { Loan } from '../interface/loan.interface'
import { Observable } from "rxjs";

@Injectable()
export class LoanResolver implements Resolve<Loan> {

    constructor(private http: HttpClient) { }

    resolve(): Observable<Loan> {
        const url = "../api/loan.json";
        return this.http.get<Loan>(url)
    }
}