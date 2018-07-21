import { Component, OnInit } from '@angular/core';
import {Task, TaskInfoService} from '../shared/task-info.service';
import {Observable} from 'rxjs';
import {UserInfoService} from '../shared/user-info.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {AbstractInteraction} from '../shared/interactions';
import {Router} from '@angular/router';
import * as bootstrap from "bootstrap";

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

  constructor( private taskInfoService: TaskInfoService, private userInfoService: UserInfoService, private router: Router) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      title: ['Go button is dimmed', [Validators.required]],
      priority: [3, [Validators.required]],
      deviceID: ['123456', [Validators.required]],
      version: ['VC40' , [Validators.required]],
      startTime: [new Date().toISOString().substring(0, 16)],
      endTime: [new Date().toISOString().substring(0, 16)],
      desc: ['Go button is dimmed, without any response.', [Validators.required]]
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
    return dateTime.toISOString().substring(0, 16);
  }

  onSubmit() {

    if (!this.formModel.valid) {
      console.log("Submit invalid data.");
      console.log(this.formModel.value);
      return;
    }
    const task = new Task( '', this.formModel.value.title, this.formModel.value.desc, this.formModel.value.priority,
      this.formModel.value.version, new Date().toISOString().substring(0, 16), this.userInfoService.currentUser.Name,
      '', this.formModel.value.deviceID, this.formModel.value.startTime, this.formModel.value.endTime, new Array<AbstractInteraction>()  );
    this.taskInfoService.submitNewTask(task);
    $('#newTaskModal').modal('hide');
    this.router.navigate(['/home/analysis']);
  }

}

