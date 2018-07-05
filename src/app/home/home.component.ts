import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';
import {LoginService} from '../shared/login.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

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
    public Name: string,
    public Department: string,
    public Role: string,
    public Email: string
  ) {
//     public Password: string
  }
}
