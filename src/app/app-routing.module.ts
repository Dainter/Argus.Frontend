import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Code404Component} from './code404/code404.component';
import {LoginComponent} from './login/login.component';
import {TaskComponent} from './task/task.component';
import {HistoryComponent} from './history/history.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginGuard} from './guard/login.guard';
import {UserInfoService} from './shared/user-info.service';
import {AnalysisComponent} from './analysis/analysis/analysis.component';
import {BasicInfoComponent} from './interactions/basic-info/basic-info.component';
import {TicketCheckComponent} from './interactions/ticket-check/ticket-check.component';
import {PreAnalysisComponent} from './interactions/pre-analysis/pre-analysis.component';
import {SolveComponent} from './interactions/solve/solve.component';

const routes: Routes = [
  {path: '', redirectTo: "/login", pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canDeactivate: [LoginGuard]},
  {path: 'home', component: HomeComponent,
    children: [
      {path: '', redirectTo: "welcome", pathMatch: 'full'},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'dashboard', component: TaskComponent,
        children: [
          {path: '', component: BasicInfoComponent},
          {path: 'TicketCheck', component: TicketCheckComponent},
          {path: 'PreAnalysis', component: PreAnalysisComponent},
          {path: 'Solve', component: SolveComponent}
        ]
      },
      {path: 'history', component: HistoryComponent},
      {path: 'analysis', component: AnalysisComponent}
    ]
  },
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserInfoService, LoginGuard]
})
export class AppRoutingModule { }
