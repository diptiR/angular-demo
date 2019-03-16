import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HeaderModule } from './common/components/modules/header/header.module';
import { FooterModule } from './common/components/modules/footer/footer.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { PipelineResolver } from './pipeline/pipelineResolver.service';
import { LoanCanLoad } from './loan/loanCanLoad';
import { AddLoanComponent } from './add-loan/add-loan.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PipelineComponent, AddLoanComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'new-loan', component: AddLoanComponent },
      {
        path: 'loan/:id',
        loadChildren: './loan/loan-forms.module#LoanFormsModule',
        canLoad: [LoanCanLoad]
      },
      {
        path: 'pipeline',
        component: PipelineComponent,
        resolve: {
          data: PipelineResolver
        }
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [PipelineResolver, LoanCanLoad],
  bootstrap: [AppComponent]
})
export class AppModule { }
