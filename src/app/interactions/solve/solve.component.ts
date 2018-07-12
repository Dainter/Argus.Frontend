import { Component, OnInit } from '@angular/core';
import {TaskInfoService} from '../../shared/task-info.service';

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css']
})
export class SolveComponent implements OnInit {

  constructor( private taskInfoService: TaskInfoService ) { }

  ngOnInit() {
    console.log(this.taskInfoService.currentTask.ID);
  }

}
