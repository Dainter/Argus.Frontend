import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './user-info.service';
import {HttpClient} from '@angular/common/http';
import {AbstractInteraction} from './Interactions';

@Injectable({
  providedIn: 'root'
})
export class TaskInfoService {

  constructor( private httpClient: HttpClient ) {
  }

  public currentTask: Task = this.getDefaultTask();

  getDefaultTask(): Task {
    return new Task(
      "", "", "", 0, "", "", "", "", "", "", [], );
  }

  getHandleTasks( username: string): Observable<Task[]> {
    return this.httpClient.get<any>('/api/HandleTasks?name=' + username);
  }

  getSubmitTasks( username: string ): Observable<Task[]> {
    return this.httpClient.get<any>('/api/SubmitTasks?name=' + username);
  }
}

export class Task {
  constructor(
    public ID: string,
    public Title: string,
    public Description: string,
    public Priority: number,
    public Version: string,
    public CreateBy: string,
    public AssignTo: string,
    public DeviceId: string,
    public StartTime: string,
    public EndTime: string,
    public Interactions: AbstractInteraction[]
  ) {
  }
}
