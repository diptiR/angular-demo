import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { LoanComponent } from "./loan.component";
import { DialogService } from "../../../../common/service/dialog.service";
import { of, Observable } from "rxjs";

@Injectable({ "providedIn": "root" })
export class LoanCanDeactivate implements CanDeactivate<LoanComponent>{
    constructor(private dialogService: DialogService) { }
    canDeactivate(component: LoanComponent) {
        if (component.loanform.dirty) {
            return this.dialogService.confirm("You will lose the data, do you want to continue?");
        }
        return true;
    }
}