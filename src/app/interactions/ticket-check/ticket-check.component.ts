import { Component, OnInit } from '@angular/core';
import {TaskInfoService} from '../../shared/task-info.service';

@Component({
  selector: 'app-ticket-check',
  templateUrl: './ticket-check.component.html',
  styleUrls: ['./ticket-check.component.css']
})
export class TicketCheckComponent implements OnInit {

  constructor( private taskInfoService: TaskInfoService ) { }

  ngOnInit() {
    console.log(this.taskInfoService.currentTask.ID);
  }

}
