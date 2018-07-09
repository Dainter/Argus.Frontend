import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public myHistoryTasks: Array<Task>;

  public type: string;

  public timeData;

  public timeOptions;

  public priorityData;

  public priorityOptions;

  constructor() { }

  ngOnInit() {
    this.myHistoryTasks = [
      new Task(100101, "Moodlight can not work when first start it.", "VC40", "2018/4/12", "Bob", "Feedback"),
      new Task(100102, "Somewords transient during scaning.", "VC40", "2018/5/29", "Clare", "Feedback"),
      new Task(100103, "Wrong screen is displayed during general workflow.", "VC50", "2018/6/7", "Alice", "Feedback"),
    ];

    this.TimeChartInit();
    this.PriorityChartInit();
  }

  TimeChartInit() {
    this.timeOptions = {
      color: ['#05AAFF', '#FF4371', '#FFD538'],
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        left: 'left',
        data: ['VC40', 'VC50'],
        textStyle: {
          color: '#000000',
        },
      },
      toolbox: {
        show: true,
        feature: {
          magicType: {show: true, type: ['stack', 'tiled']},
          saveAsImage: {show: true}
        }
      },
      xAxis: [
        {
          type: 'category',
          data: ["January", "February", "March", "April", "May", "June", "July"],
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: '#000000',
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 10
            },
          },
          axisLabel: {
            textStyle: {
              color: '#000000',
            },
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#000000',
            },
          },
          axisLabel: {
            textStyle: {
              color: '#000000',
            },
          },
        },
      ],
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      series: [
        {
          name: 'VC40',
          type: 'line',
          data: [65, 59, 80, 81, 56, 55, 40],
          lineStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 10
          },
        },
        {
          name: 'VC50',
          type: 'line',
          data: [20, 10, 12, 3, 23, 5, 4],
          lineStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 10
          },
        },
      ],
    };
  }

  PriorityChartInit() {
    this.priorityOptions = {
      color: ["rgba(5, 155, 255, 1)", "rgba(255, 194, 51, 1)", "rgba(255, 61, 103, 1)"],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Info', 'Warning', 'Error'],
      },
      series: [
        {
          name: 'Priorities',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          data: [
            { value: 123, name: 'Info' },
            { value: 50, name: 'Warning' },
            { value: 32, name: 'Error' },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: '#AAAAAA',
            },
          },
          label: {
            normal: {
              textStyle: {
                color: '#000000',
              },
            },
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: '#000000',
              },
            },
          },
        },
      ],
    };
  }
}

export class Task {
  constructor(
    public id: number,
    public title: string,
    public version: string,
    public createOn: string,
    public createBy: string,
    public step: string,
  ) {
  }
}
