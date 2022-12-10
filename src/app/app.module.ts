import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './view/welcome/welcome.component';
import { SignInComponent } from './view/sign-in/sign-in.component';
import { SignUpComponent } from './view/sign-up/sign-up.component';
import { NotFoundComponent } from './view/not-found/not-found.component';
import { ServerErrorComponent } from './view/server-error/server-error.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { FixedDepositComponent } from './view/fixed-deposit/fixed-deposit.component';
import { HomeComponent } from './view/home/home.component';
import { LoanComponent } from './view/loan/loan.component';
import { TransactionComponent } from './view/transaction/transaction.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent,
    ServerErrorComponent,
    DashboardComponent,
    FixedDepositComponent,
    HomeComponent,
    LoanComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
