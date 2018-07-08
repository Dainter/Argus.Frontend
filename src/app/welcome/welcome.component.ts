import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User, UserInfoService} from '../shared/user-info.service';
import {NgxEchartsService} from 'ngx-echarts';
import * as $ from "jquery";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  curUser: User;

  type: string;

  chartOption;

  echarts;

  constructor(private userInfoService: UserInfoService, private es: NgxEchartsService) {
  }

  ngOnInit() {
    this.curUser = this.userInfoService.currentUser;

    this.onChartInit();
  }

  onChartInit() {
    this.echarts = this.es.echarts;
    let _this = this;
    $.getJSON('assets/map/world.json', function (data ) {
      _this.echarts.registerMap('world', data);
      _this.chartOption = {
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            saveAsImage: {}
          }
        },
        series: [{
          type: 'map',
          map: 'world'
        }],
      };
    });
  }
}
