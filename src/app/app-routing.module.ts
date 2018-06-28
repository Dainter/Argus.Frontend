import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Code404Component} from './code404/code404.component';
import {LoginComponent} from './login/login.component';
import {TaskComponent} from './task/task.component';
import {HistoryComponent} from './history/history.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginService} from './shared/login.service';

const routes: Routes = [
  {path: '', redirectTo: "/login", pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,
    children: [
      {path: '', redirectTo: "welcome", pathMatch: 'full'},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'dashboard', component: TaskComponent},
      {path: 'history', component: HistoryComponent}
    ]
  },
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginService]
})
export class AppRoutingModule { }
