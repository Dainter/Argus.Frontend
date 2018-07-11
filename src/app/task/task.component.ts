import { Component, OnInit } from '@angular/core';
import {Task, TaskInfoService} from '../shared/task-info.service';
import {Observable} from 'rxjs';
import {UserInfoService} from '../shared/user-info.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public myHandleTasks: Observable<Task[]>;
  public mySubmitTasks: Observable<Task[]>;

  constructor( private taskInfoService: TaskInfoService, private userInfoService: UserInfoService) {

  }

  ngOnInit() {

    const username = this.userInfoService.currentUser.Name;
    this.myHandleTasks = this.taskInfoService.getHandleTasks( username );
    this.mySubmitTasks = this.taskInfoService.getSubmitTasks( username );

  }

  onClick( curTask: Task){
    console.log( curTask );

  }

}

