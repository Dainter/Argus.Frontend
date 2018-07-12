import {Component, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {Task, TaskInfoService} from '../shared/task-info.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  @Input()
  currentTask: Task;

  constructor() {

  }

  ngOnInit() {

  }

  onPageClick(id : number) {
    console.log(id);
  }

}
