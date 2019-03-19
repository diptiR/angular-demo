import { TestBed, async } from '@angular/core/testing';

import { PipelineComponent } from './pipeline.component';
import { Observable, of } from "rxjs";
import { Router } from "@angular/router";
import { PipelineDataService } from "src/app/modules/pipeline/pipeline-data.service";
import { Loan } from "src/app/common/interface/loan.interface";

class RouterSpy {
    public navigate(): Observable<boolean> {
        return of(true);
    }
}

class PipelineDataServiceSpy {
    loans = [];
    public getLoans(): Observable<Loan[]> {
        return of(this.loans);
    }
}

describe('PipelineComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PipelineComponent
            ],
        })
            .overrideComponent(PipelineComponent, {
                set: {
                    providers: [
                        { provide: Router, useClass: RouterSpy },
                        { provide: PipelineDataService, useClass: PipelineDataServiceSpy }
                    ]
                }
            }).compileComponents();
    }));

    it('should navigate to loan url with loan id when loan is clicked', async(() => {
        const fixture = TestBed.createComponent(PipelineComponent);
        const component = fixture.componentInstance;
        const routerSpy = fixture.debugElement.injector.get(Router) as any;
        let spyLang = spyOn(routerSpy, 'navigate');
        component.loanClicked("1");
        fixture.detectChanges();
        expect(spyLang).toHaveBeenCalledWith(["loan", "1"]);
    }));

    it('should navigate to loan/edit url with loan id when loan edit button is clicked', async(() => {
        const fixture = TestBed.createComponent(PipelineComponent);
        const component = fixture.componentInstance;
        const routerSpy = fixture.debugElement.injector.get(Router) as any;
        let spyLang = spyOn(routerSpy, 'navigate');
        component.loanEditClicked("1");
        fixture.detectChanges();
        expect(spyLang).toHaveBeenCalledWith(["loan", "1", "edit"]);
    }));

    describe("Testing ngOnInit", () => {
        it('should call pipeline data service getLoan function on load', async(() => {
            const loans: Loan[] = [{
                id: "personal1",
                prefix: "Mr",
                type: "Personal",
                borrowerFirstName: "Aditya",
                borrowerMiddleName: "Suresh",
                borrowerLastName: "Acharya",
                rateOfInterest: 8.5,
                loanAmt: 1000,
                emiAmt: 20000,
                balanceAmt: 800000
            }];
            const fixture = TestBed.createComponent(PipelineComponent);
            const component = fixture.componentInstance;
            const pipelineDataServiceSpy = fixture.debugElement.injector.get(PipelineDataService) as any;
            let spyLang = spyOn(pipelineDataServiceSpy, 'getLoans').and.returnValue(
                of(<Loan[]>loans));
            fixture.detectChanges();
            component.ngOnInit();
            fixture.detectChanges();
            expect(spyLang).toHaveBeenCalledWith();
            expect(component.loans).toEqual(loans);
        }));
    })
});
