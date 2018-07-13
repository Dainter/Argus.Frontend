import { Component, OnInit } from '@angular/core';
import {TaskInfoService} from '../../shared/task-info.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Solve} from '../../shared/interactions';

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css']
})
export class SolveComponent implements OnInit {

  interactionId: number;

  solve: Solve;

  constructor( private routeInfo: ActivatedRoute,
               private taskInfoService: TaskInfoService ) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => this.interactionId = params["interactionId"]);
    this.solve = <Solve>this.taskInfoService.currentTask.Interactions[this.interactionId];
  }

}
