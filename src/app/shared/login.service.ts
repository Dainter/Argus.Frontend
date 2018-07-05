import {Injectable, OnInit} from '@angular/core';
import { User } from '../home/home.component';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  dataSource: Observable<any>;

  users;

  constructor(private httpClient: HttpClient) {
    this.dataSource = this.httpClient.get<any>('/api/Values');

  }

  validate(mailBox: string, password: string): boolean {
    return true;
  }

  getCurrentUser(): any {
    this.dataSource.subscribe(
      (data) => this.users = data
    );
    return this.users;
    //return new User("Dainter", "CT DD DS AA CN DI NJ", "Administrator", "xiaogang.dai@siemens.com", "123456" );
  }


}
