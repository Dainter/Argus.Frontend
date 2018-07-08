import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './user-info.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskInfoService {

  constructor( private httpClient: HttpClient ) {
  }

  getHandleTasks( username: string): Observable<TaskInfo[]> {
    return this.httpClient.get<any>('/api/HandleTaskInfo?name=' + username);
  }

  getSubmitTasks( username: string ): Observable<TaskInfo[]> {
    return this.httpClient.get<any>('/api/SubmitTaskInfo?name=' + username);
  }
}

export class TaskInfo {
  constructor(
    public ID: string,
    public Title: string,
    public Priority: number,
    public Version: string,
    public Submitter: string,
    public Handler: string
  ) {
  }
}
