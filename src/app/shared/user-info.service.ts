import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  public currentUser: User = new User( "Dainter", "CT DD DS NJ", "Administrator", "xiaogang.dai@siemens.com", "123456");

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
    public Name: string,
    public Department: string,
    public Role: string,
    public Email: string,
    public Password: string
  ) {
  }
}
