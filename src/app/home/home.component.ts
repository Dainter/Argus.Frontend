import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';
import {LoginService} from '../shared/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }



}

export class User {
  constructor(
    public name: string,
    public department: string,
    public role: string,
    public mailBox: string,
    public password: string
  ) {

  }
}
