import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  public currentUser: User;

  private users: Observable<User[]>;

  constructor( private httpClient: HttpClient) {
    this.users = this.getUsers();
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<any>('/api/Users');
  }

  regist( curUser: User ) {
    this.currentUser = curUser;
  }
}

export class User {
  constructor(
    public name: string,
    public department: string,
    public role: string,
    public email: string,
    public password: string
  ) {
  }
}
