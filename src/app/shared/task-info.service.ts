import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './user-info.service';
import {HttpClient} from '@angular/common/http';
import {AbstractInteraction} from './interactions';

@Injectable({
  providedIn: 'root'
})
export class TaskInfoService {

  private taskIndex = 100108;

  public currentTask: Task = this.getDefaultTask();

  public myAnalysisTasks: AnalysisTask[] = [];

  public userBehaviors = [
    'Select Patient',
    'Start Examination',
    'Select Protocol',
    'Confirm Position',
    'Scan Topogram',
    'Plan Tomogram',
    'Scan Tomogram',
    'Check Quality',
    'Close Patient'
  ];

  constructor( private httpClient: HttpClient ) {
  }

  getDefaultTask(): Task {
    return new Task(
      "", "", "", 0, "", "", "", "", "", "", "", [], );
  }

  getHandleTasks( username: string): Observable<Task[]> {
    return this.httpClient.get<any>('/api/HandleTasks?name=' + username);
  }

  getSubmitTasks( username: string ): Observable<Task[]> {
    return this.httpClient.get<any>('/api/SubmitTasks?name=' + username);
  }

  getHistoryTasks(): Observable<Task[]> {
    return this.httpClient.get<any>('/api/HistoryTasks');
  }

  getAnalysisTasks(): AnalysisTask[] {
    return this.myAnalysisTasks.sort((a, b) => {
      if (a.task.ID < b.task.ID) {
        return -1;
      } else if (a.task.ID > b.task.ID) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  submitNewTask( newTask: Task ) {
    newTask.ID = this.taskIndex.toString();
    this.taskIndex ++;
    const err = Math.random() * (this.userBehaviors.length - 1.1);
    this.myAnalysisTasks.push(new AnalysisTask(newTask, 0, Math.floor(err)));
  }

}

export class Task {
  constructor(
    public ID: string,
    public Title: string,
    public Description: string,
    public Priority: number,
    public Version: string,
    public CreateOn: string,
    public CreateBy: string,
    public AssignTo: string,
    public DeviceId: string,
    public StartTime: string,
    public EndTime: string,
    public Interactions: AbstractInteraction[]
  ) {
  }
}


export class AnalysisTask {
  constructor(
    public task: Task,
    public progress: number,
    public error: number
  ){

  }
}
