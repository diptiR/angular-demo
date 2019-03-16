import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HeaderModule } from './common/components/modules/header/header.module';
import { FooterModule } from './common/components/modules/footer/footer.module';
import { PipelineModule } from './modules/pipeline/pipeline.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoanCanLoad } from './loan/loanCanLoad';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { PipelineComponent } from './modules/pipeline/pipeline.component';
import { PipelineResolver } from './modules/pipeline/pipelineResolver.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, AddLoanComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    PipelineModule,
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
