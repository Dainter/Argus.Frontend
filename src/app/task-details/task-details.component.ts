import {AfterContentChecked, AfterContentInit, AfterViewChecked, Component, Input, OnChanges, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {Task, TaskInfoService} from '../shared/task-info.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit, OnChanges {

  @Input()
  currentTask: Task;

  currentPage = 0;

  constructor() {

  }

  ngOnInit() {
  }

  onPageClick(id: number) {
    this.currentPage = id + 1;
  }

  ngOnChanges(): void {
    this.currentPage = 0;
  }
}
