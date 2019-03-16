import { Injectable } from '@angular/core';

import { Loan } from '../interface/loan.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PipelineService {
  getLoans(): Observable<Loan[]> {
    return;
  }
}
