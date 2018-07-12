import { Component, OnInit } from '@angular/core';
import {TaskInfoService} from '../../shared/task-info.service';

@Component({
  selector: 'app-pre-analysis',
  templateUrl: './pre-analysis.component.html',
  styleUrls: ['./pre-analysis.component.css']
})
export class PreAnalysisComponent implements OnInit {

  constructor( private taskInfoService: TaskInfoService ) { }

  ngOnInit() {
    console.log(this.taskInfoService.currentTask.ID);
  }

}
