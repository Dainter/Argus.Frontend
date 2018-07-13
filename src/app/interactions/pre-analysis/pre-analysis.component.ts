import { Component, OnInit } from '@angular/core';
import {TaskInfoService} from '../../shared/task-info.service';
import {ActivatedRoute, Params} from '@angular/router';
import {PreAnalysis} from '../../shared/interactions';

@Component({
  selector: 'app-pre-analysis',
  templateUrl: './pre-analysis.component.html',
  styleUrls: ['./pre-analysis.component.css']
})
export class PreAnalysisComponent implements OnInit {

  interactionId: number;
  preAnalysis: PreAnalysis;

  constructor( private routeInfo: ActivatedRoute,
               private taskInfoService: TaskInfoService ) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => this.interactionId = params["interactionId"]);
    this.preAnalysis = <PreAnalysis>this.taskInfoService.currentTask.Interactions[this.interactionId];
  }

}
