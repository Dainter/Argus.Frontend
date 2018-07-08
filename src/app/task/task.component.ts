import { Component, OnInit } from '@angular/core';
import {} from "jquery";
import {TaskInfo, TaskInfoService} from '../shared/task-info.service';
import {Observable} from 'rxjs';
import {UserInfoService} from '../shared/user-info.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public myHandleTasks: Observable<TaskInfo[]>;
  public mySubmitTasks: Observable<TaskInfo[]>;

  constructor( private taskInfoService: TaskInfoService, private userInfoService: UserInfoService) { }

  ngOnInit() {
    let username = this.userInfoService.currentUser.Name;
    this.myHandleTasks = this.taskInfoService.getHandleTasks( username );
    this.mySubmitTasks = this.taskInfoService.getSubmitTasks( username );
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
