import { Component, OnInit } from '@angular/core';
import {TaskInfoService, Task} from '../../shared/task-info.service';


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  currentTask: Task;

  constructor( private taskInfoService: TaskInfoService ) { }

  ngOnInit() {
    this.currentTask = this.taskInfoService.currentTask;
  }

}
