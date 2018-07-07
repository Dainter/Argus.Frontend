import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User, UserInfoService} from '../shared/user-info.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  curUser: User;

  type: string;

  data;

  options;

  users;

  constructor(private userInfoService: UserInfoService, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.curUser = this.userInfoService.currentUser;

    this.ChartInit();
  }

  ChartInit() {
    this.type = 'bar';
    this.data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "VC40",
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: "rgba(0, 255, 0, 1)",
          borderWidth: 1,
          backgroundColor: "rgba(0, 255, 0, 0.3)"
        },
        {
          label: "VC50",
          data: [20, 10, 12, 3, 23, 5, 4],
          borderColor: "rgba(0, 0, 255, 1)",
          borderWidth: 1,
          backgroundColor: "rgba(0, 0, 255, 0.3)"
        }
      ]
    };
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true
        }]
      }
    };
  }

  ngOnDestroy(): void {
    console.log(this.users);
  }
}
