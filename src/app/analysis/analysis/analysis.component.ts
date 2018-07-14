import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../shared/task-info.service';
import {DatabaseService, Graph} from '../../shared/database.service';
import {NgxEchartsService} from 'ngx-echarts';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  public myAnalysisTasks: Observable<Task[]>;

  public myGraph: Observable<Graph>;

  public myUserBehaviors = [
    'Select Patient',
    'Start Examination',
    'Select Protocol',
    'Confirm Position',
    'Scan Topogram',
    'Plan Tomogram',
    'Scan Tomogram',
    'Check Quality',
    'Reconstruction',
    'Close Patient'
  ];

  chartOption;

  graphEcharts;

  graphOption;

  constructor( private databaseService: DatabaseService, private es: NgxEchartsService) { }

  ngOnInit() {
    this.onChatInit();

    this.onGraphInit();
  }

  onChatInit() {
    this.chartOption = {
      tooltip: {},
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series : [
        {
          type: 'graph',
          layout: 'none',
          symbolSize: 50,
          roam: false,
          label: {
            normal: {
              show: true
            }
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [4, 10],
          edgeLabel: {
            normal: {
              textStyle: {
                fontSize: 20
              }
            }
          },
          itemStyle: {
            color: '#4682B4',
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 5,
            shadowOffsetX: 1,
            shadowOffsetY: 1
          },
          data: [{
            name: 'Select\nPatient',
            x: 100,
            y: 100
          }, {
            name: 'Start\nExam',
            x: 200,
            y: 150
          }, {
            name: 'Select\nProtocol',
            x: 300,
            y: 200
          }, {
            name: 'Confirm\nPosition',
            x: 400,
            y: 250
          }, {
            name: 'Scan\nTopo',
            x: 500,
            y: 300
          }, {
            name: 'Tomo\nPlan',
            x: 600,
            y: 350
          }, {
            name: 'Scam\nTomo',
            x: 700,
            y: 400
          }, {
            name: 'Quality\nCheck',
            x: 800,
            y: 450
          }, {
            name: 'Close\nPatient',
            x: 900,
            y: 500
          }, {
            name: 'Emergency\nPatient',
            x: 100,
            y: 200
          }, {
            name: 'Auto\nPosition',
            x: 500,
            y: 200
          }, {
            name: 'Recon',
            x: 900,
            y: 400
          }],
          // links: [],
          links: [{
            source: 0,
            target: 1,
          }, {
            source: 1,
            target: 2,
          }, {
            source: 2,
            target: 3
          }, {
            source: 3,
            target: 4
          }, {
            source: 4,
            target: 5
          }, {
            source: 5,
            target: 6
          }, {
            source: 6,
            target: 7
          }, {
            source: 7,
            target: 8
          }, {
            source: 'Emergency\nPatient',
            target: 'Select\nProtocol'
          }, {
            source: 'Select\nProtocol',
            target: 'Auto\nPosition'
          }, {
            source: 'Auto\nPosition',
            target: 'Scan\nTopo'
          }, {
            source: 'Quality\nCheck',
            target: 'Recon'
          }, {
            source: 'Recon',
            target: 'Close\nPatient'
          }, {
            source: 'Select\nProtocol',
            target: 'Close\nPatient',
            lineStyle: {
              normal: { curveness: -0.3 }
            }
          }, {
            source: 'Confirm\nPosition',
            target: 'Close\nPatient',
            lineStyle: {
              normal: { curveness: -0.3 }
            }
          }, {
            source: 'Tomo\nPlan',
            target: 'Close\nPatient',
            lineStyle: {
              normal: { curveness: -0.3 }
            }
          }],
          lineStyle: {
            normal: {
              opacity: 0.9,
              width: 2,
              curveness: 0
            }
          }
        }
      ]
    };
  }

  onGraphInit() {
    this.myGraph = this.databaseService.getGraph();

    this.myGraph.subscribe(
      (graph: Graph) => {
        this.onDataLoaded(graph);
      }
    );
  }

  onDataLoaded(graph: Graph) {

    const _this = this;
    this.graphOption = {
      tooltip: {},
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series : [
        {
          type: 'graph',
          layout: 'force',
          symbolSize: 15,
          roam: true,
          zoom: 5,
          label: {
            normal: {
              show: true
            }
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [4, 10],
          focusNodeAdjacency: true,
          data: graph.nodes.map(function (node) {
            const color = _this.getColorByType(node.type);
            return {
              name: node.name,
              value: node.type,
              itemStyle: {
                color: color,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 5,
                shadowOffsetX: 1,
                shadowOffsetY: 1
              },
              tooltip: {
                formatter: '{b}: {c}'
              }
            };
          }),
          links: graph.edges.map(function (edge) {
            return {
              source: edge.source,
              target: edge.target,
              value: edge.type
            };
          }),
          lineStyle: {
            normal: {
              opacity: 0.9,
              width: 2,
              curveness: 0
            }
          },
          force: {
            repulsion: 40
          }
        }
      ]
    };
  }

  getColorByType( type: string): string {
    switch (type)
    {
      case 'User' :
        return '#4D90BF';
      case 'UserGroup' :
        return '#004983';
      case 'Task' :
        return '#19A15F';
      case 'Procedure' :
        return '#FFCD41';
      case 'ProcedureStep' :
        return '#FFE066';
      case 'Role' :
        return '#DE5347';
      default :
        return '#4682B4';
    }
  }
}
