import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

@Injectable()
export class LoanCanLoad implements CanLoad {
    canLoad() {
        return true;
    }
}
