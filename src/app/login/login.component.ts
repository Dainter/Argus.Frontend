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
    let fb = new FormBuilder();
    this.formModel = fb.group({
      email: [""],
      password: [""]
    });
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (users) => this.users = users
    );
  }

  authentication(){
    let userIndex = this.users.findIndex((user) => user.email === this.formModel.get("email").value);
    if ( userIndex < 0)
    {
      console.log("Invalid email address.");
      this.isValid = false;
      this.isLoggedIn = false;
      return;
    }
    let user = this.users[userIndex];
    if ( user.password !== this.formModel.get("password").value )
    {
      console.log("Invalid password.");
      this.isValid = false;
      this.isLoggedIn = false;
      return;
    }
    this.userService.regist( this.users[userIndex] );
    this.isLoggedIn = true;
  }
}
