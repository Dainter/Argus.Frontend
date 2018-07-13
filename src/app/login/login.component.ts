import { Component, OnInit } from '@angular/core';
import { User, UserInfoService } from '../shared/user-info.service';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLoggedIn = false;

  private users: User[];

  public isValid = true;

  formModel: FormGroup;

  constructor( private userService: UserInfoService ) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      email: ["clare@siemens.com"],
      password: ["123456"]
    });
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (users) => this.users = users
    );
  }

  authentication(){
    const userIndex = this.users.findIndex((curUser) => curUser.Email === this.formModel.get("email").value);
    if ( userIndex < 0)
    {
      this.isValid = false;
      this.isLoggedIn = false;
      return;
    }
    const user = this.users[userIndex];
    if ( user.Password !== this.formModel.get("password").value )
    {
      this.isValid = false;
      this.isLoggedIn = false;
      return;
    }
    this.userService.regist( this.users[userIndex] );
    this.isLoggedIn = true;
  }
}
