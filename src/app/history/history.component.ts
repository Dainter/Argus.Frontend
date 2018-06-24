import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public myHistoryTasks: Array<Task>;

  public type: string;

  public timeData;

  public timeOptions;

  public priorityData;

  public priorityOptions;

  constructor() { }

  ngOnInit() {
    this.myHistoryTasks = [
      new Task(100101, "Moodlight can not work when first start it.", "VC40", "2018/4/12", "Bob", "Feedback"),
      new Task(100102, "Somewords transient during scaning.", "VC40", "2018/5/29", "Clare", "Feedback"),
      new Task(100103, "Wrong screen is displayed during general workflow.", "VC50", "2018/6/7", "Alice", "Feedback"),
    ];

    this.TimeChartInit();
    this.PriorityChartInit();
  }

  TimeChartInit() {
    this.timeData = {
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
    this.timeOptions = {
      responsive: true
    };
  }

  PriorityChartInit() {
    this.priorityData = {
      labels: ["Info", "Warning", "Error"],
      datasets: [
        {
          label: "VC40",
          data: [123, 50, 32],
          backgroundColor: ["rgba(5, 155, 255, 1)", "rgba(255, 194, 51, 1)", "rgba(255, 61, 103, 1)"],
        }
      ]
    };
    this.priorityOptions = {
      responsive: true,
      animateRotate: true
    };
  }
}

export class Task {
  constructor(
    public id: number,
    public title: string,
    public version: string,
    public createOn: string,
    public createBy: string,
    public step: string,
  ) {
  }
}
