import { Component, OnInit } from '@angular/core';
import {TaskInfoService} from '../../shared/task-info.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  constructor( private taskInfoService: TaskInfoService ) { }

  ngOnInit() {
    console.log(this.taskInfoService.currentTask.ID);
  }

}
