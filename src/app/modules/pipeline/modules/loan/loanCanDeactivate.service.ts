import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { LoanComponent } from "./loan.component";

@Injectable({"providedIn":"root"})
export class LoanCanDeactivate implements CanDeactivate<LoanComponent>{
    canDeactivate(component: LoanComponent): boolean{
        if(component.loanform.dirty){
            window.alert("Data unsaved");
            return false;
        }
        return true;
    }
}