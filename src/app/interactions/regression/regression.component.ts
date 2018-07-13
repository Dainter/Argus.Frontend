import { Component, OnInit } from '@angular/core';
import {TaskInfoService} from '../../shared/task-info.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Regression} from '../../shared/interactions';

@Component({
  selector: 'app-regression',
  templateUrl: './regression.component.html',
  styleUrls: ['./regression.component.css']
})
export class RegressionComponent implements OnInit {

  interactionId: number;

  regression: Regression;

  constructor(private routeInfo: ActivatedRoute,
              private taskInfoService: TaskInfoService) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => this.interactionId = params["interactionId"]);
    this.regression = <Regression>this.taskInfoService.currentTask.Interactions[this.interactionId];
  }

}
