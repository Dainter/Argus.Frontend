import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {UserInfoService} from '../shared/user-info.service';
import {LoginComponent} from '../login/login.component';
import {Observable} from 'rxjs';

export class LoginGuard implements CanDeactivate<LoginComponent> {

  constructor(){}

  canDeactivate(component: LoginComponent ) {
    component.authentication();
    console.log(component.isLoggedIn);
    return component.isLoggedIn;
  }
}
