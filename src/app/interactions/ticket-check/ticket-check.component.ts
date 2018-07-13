import { Component, OnInit } from '@angular/core';
import {TaskInfoService} from '../../shared/task-info.service';
import {ActivatedRoute, Params} from '@angular/router';
import {TicketCheck} from '../../shared/interactions';

@Component({
  selector: 'app-ticket-check',
  templateUrl: './ticket-check.component.html',
  styleUrls: ['./ticket-check.component.css']
})
export class TicketCheckComponent implements OnInit {

  interactionId: number;

  ticketCheck: TicketCheck;

  constructor( private routeInfo: ActivatedRoute,
               private taskInfoService: TaskInfoService ) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => this.interactionId = params["interactionId"]);
    this.ticketCheck = <TicketCheck>this.taskInfoService.currentTask.Interactions[this.interactionId];
  }

}
