import { Component, OnInit } from '@angular/core';
import {TaskInfoService} from '../../shared/task-info.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Evaluate} from '../../shared/interactions';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit {

  interactionId: number;

  evaluate: Evaluate;

  constructor(private routeInfo: ActivatedRoute,
              private taskInfoService: TaskInfoService) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => this.interactionId = params["interactionId"]);
    this.evaluate = <Evaluate>this.taskInfoService.currentTask.Interactions[this.interactionId];
  }

}
