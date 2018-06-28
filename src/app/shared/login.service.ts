import { Injectable } from '@angular/core';
import {User} from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  validate(mailBox: string, password: string): boolean {
    return true;
  }

  getCurrentUser(): User {
    return new User("Dainter", "CT DD DS AA CN DI NJ", "Administrator", "xiaogang.dai@siemens.com", "123456" )
  }
}
