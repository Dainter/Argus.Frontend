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
    const _this = this;
    $.getJSON('assets/map/world.json', function (data ) {
      _this.echarts.registerMap('world', data);
      _this.chartOption = {
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
          formatter: function (params) {
            return params.name + ': ' + params.value;
          }
        },
        visualMap: {
          left: 'left',
          min: 0,
          max: 50,
          inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          },
          text: ['High', 'Low'],           // 文本，默认为数值文本
          calculable: true
        },
        toolbox: {
          show: true,
          left: 'left',
          top: 'top',
          feature: {
            dataView: {readOnly: true},
            restore: {},
            saveAsImage: {}
          }
        },
        series: [{
          type: 'map',
          map: 'world',
          roam: true,
          zoom: 1.4,
          data: [
            {name: 'United States', value: 23},
            {name: 'China', value: 10},
            {name: 'Japan', value: 47},
            {name: 'Germany', value: 32},
            {name: 'France', value: 14},
            {name: 'United Kingdom', value: 35},
            {name: 'India', value: 22},
            {name: 'Brazil', value: 5},
            {name: 'Italy', value: 26},
            {name: 'Canada', value: 32},
            {name: 'Korea', value: 33},
            {name: 'Russia', value: 37},
            {name: 'Australia', value: 29},
            {name: 'Spain', value: 41},
            {name: 'Mexico', value: 15},
            {name: 'Indonesia', value: 22},
            {name: 'Turkey', value: 32},
            {name: 'Netherlands', value: 35},
            {name: 'Switzerland', value: 47},
            {name: 'Saudi Arabia', value: 11}
          ]
        }],
      };
    });
  }
}
