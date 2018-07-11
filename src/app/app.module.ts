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
    AnalysisComponent
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
