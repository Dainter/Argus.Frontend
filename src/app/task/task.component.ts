import { Component, OnInit } from '@angular/core';
import {} from "jquery";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public myHandleTasks: Array<Task>;
  public mySubmitTasks: Array<Task>;

  constructor() { }

  ngOnInit() {
    this.myHandleTasks = [
      new Task(100101, "Moodlight can not work when first start it.", "VC40", "2018/4/12", "Bob", "Feedback"),
      new Task(100102, "Somewords transient during scaning.", "VC40", "2018/5/29", "Clare", "Feedback"),
      new Task(100103, "Wrong screen is displayed during general workflow.", "VC50", "2018/6/7", "Alice", "Feedback"),
    ];

    this.mySubmitTasks = [
      new Task(100205, "The [Go] button is dimmed for apply protocol.", "VC40", "2018/5/13", "Alic", "Tick Check"),
      new Task(100206, "An exception pops when change topo length at ready to load screen.", "VC50", "2018/6/2", "Alice", "Solve"),
    ];

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
