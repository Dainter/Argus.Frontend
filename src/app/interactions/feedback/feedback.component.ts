import { Component, OnInit } from '@angular/core';
import {TaskInfoService} from '../../shared/task-info.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Feedback} from '../../shared/interactions';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  interactionId: number;

  feedback: Feedback;

  constructor(private routeInfo: ActivatedRoute,
              private taskInfoService: TaskInfoService) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => this.interactionId = params["interactionId"]);
    this.feedback = <Feedback>this.taskInfoService.currentTask.Interactions[this.interactionId];
  }

}
