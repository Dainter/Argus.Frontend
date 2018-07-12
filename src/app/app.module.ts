import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { HistoryComponent } from './history/history.component';
import { Code404Component } from './code404/code404.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxEchartsModule, NgxEchartsService } from 'ngx-echarts';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { AnalysisComponent } from './analysis/analysis/analysis.component';
import { BasicInfoComponent } from './interactions/basic-info/basic-info.component';
import { TicketCheckComponent } from './interactions/ticket-check/ticket-check.component';
import { PreAnalysisComponent } from './interactions/pre-analysis/pre-analysis.component';
import { SolveComponent } from './interactions/solve/solve.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TaskComponent,
    HistoryComponent,
    Code404Component,
    LoginComponent,
    WelcomeComponent,
    TaskDetailsComponent,
    AnalysisComponent,
    BasicInfoComponent,
    TicketCheckComponent,
    PreAnalysisComponent,
    SolveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule
  ],
  providers: [{provide: NgxEchartsService, useClass: NgxEchartsService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
