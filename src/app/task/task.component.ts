import { Component, OnInit } from '@angular/core';
import {Task, TaskInfoService} from '../shared/task-info.service';
import {Observable} from 'rxjs';
import {UserInfoService} from '../shared/user-info.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {AbstractInteraction} from '../shared/interactions';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public selectedTask = this.taskInfoService.getDefaultTask();

  public myHandleTasks: Observable<Task[]>;
  public mySubmitTasks: Observable<Task[]>;

  newTask: Task;

  formModel: FormGroup;

  private datePipe: DatePipe;

  constructor( private taskInfoService: TaskInfoService, private userInfoService: UserInfoService) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      title: [""],
      priority: [3],
      deviceID: [""],
      version: [""],
      startTime: [new Date().toISOString().substring(0, 16)],
      endTime: [new Date().toISOString().substring(0, 16)],
      desc: [""]
    });
  }

  ngOnInit() {
    const username = this.userInfoService.currentUser.Name;
    this.myHandleTasks = this.taskInfoService.getHandleTasks( username );
    this.mySubmitTasks = this.taskInfoService.getSubmitTasks( username );
  }

  onClick( curTask: Task){
    this.taskInfoService.currentTask = curTask;
    this.selectedTask = curTask;
  }

  formatTime( dateTick: number): string{
    const dateTime = new Date(dateTick);
    console.log(dateTime.toISOString().substring(0, 16));

    return dateTime.toISOString().substring(0, 16);
  }

  onSubmit() {
    console.log(this.formModel.value);
    const task = new Task( "100234", this.formModel.value.title, this.formModel.value.desc, this.formModel.value.priority,
      this.formModel.value.version, new Date().toISOString().substring(0, 16), this.userInfoService.currentUser.Name,
      "", this.formModel.value.deviceID, this.formModel.value.startTime, this.formModel.value.endTime, new Array<AbstractInteraction>()  );
    console.log(task);
  }

}

