import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public type: string;

  public data;

  public options;

  constructor() {

  }

  ngOnInit() {
    this.ChartInit();
  }

  ChartInit() {
    this.type = 'bar';
    this.data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "VC40",
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          backgroundColor: "rgba(0, 255, 0, 0.3)"
        },
        {
          label: "VC50",
          data: [20, 10, 12, 3, 23, 5, 4],
          borderColor: "rgba(0, 0, 255, 1)",
          borderWidth: 1,
          backgroundColor: "rgba(0, 0, 255, 0.3)"
        }
      ]
    };
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true
        }]
      }
    };
  }

}
