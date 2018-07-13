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
import {EvaluateComponent} from './interactions/evaluate/evaluate.component';
import {RegressionComponent} from './interactions/regression/regression.component';
import {FeedbackComponent} from './interactions/feedback/feedback.component';

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
          {path: 'TicketCheck/:interactionId', component: TicketCheckComponent},
          {path: 'PreAnalysis/:interactionId', component: PreAnalysisComponent},
          {path: 'Solve/:interactionId', component: SolveComponent},
          {path: 'Evaluate/:interactionId', component: EvaluateComponent},
          {path: 'Regression/:interactionId', component: RegressionComponent},
          {path: 'Feedback/:interactionId', component: FeedbackComponent}
        ]
      },
      {path: 'history', component: HistoryComponent,
        children: [
          {path: '', component: BasicInfoComponent},
          {path: 'TicketCheck/:interactionId', component: TicketCheckComponent},
          {path: 'PreAnalysis/:interactionId', component: PreAnalysisComponent},
          {path: 'Solve/:interactionId', component: SolveComponent},
          {path: 'Evaluate/:interactionId', component: EvaluateComponent},
          {path: 'Regression/:interactionId', component: RegressionComponent},
          {path: 'Feedback/:interactionId', component: FeedbackComponent}
        ]
      },
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
