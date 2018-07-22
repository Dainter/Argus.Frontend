import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AnalysisTask, TaskInfoService} from '../../shared/task-info.service';
import {DatabaseService, Graph} from '../../shared/database.service';
import {NgxEchartsService} from 'ngx-echarts';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  myAnalysisTasks: AnalysisTask[];

  curUserBehaviors = [];

  public myGraph: Observable<Graph>;

  myKbChart;

  workflowData: WorkflowNode[] = [
    new WorkflowNode('Select\nPatient', 100, 100, false, false),
    new WorkflowNode('Start\nExam', 200, 150, false, false),
    new WorkflowNode('Select\nProtocol', 300, 200, false, false),
    new WorkflowNode('Confirm\nPosition', 400, 250, false, false),
    new WorkflowNode('Scan\nTopo', 500, 300, false, false),
    new WorkflowNode('Tomo\nPlan', 600, 350, false, false),
    new WorkflowNode('Scan\nTomo', 700, 400, false, false),
    new WorkflowNode('Quality\nCheck', 800, 450, false, false),
    new WorkflowNode('Close\nPatient', 900, 500, false, false),
    new WorkflowNode('Emergency\nPatient', 100, 200, false, false),
    new WorkflowNode('Auto\nPosition', 500, 200, false, false),
    new WorkflowNode('Recon', 900, 400, false, false),
  ];

  workflowLink: WorkflowEdge[] = [
    new WorkflowEdge('Select\nPatient', 'Start\nExam', 0),
    new WorkflowEdge('Start\nExam', 'Select\nProtocol', 0),
    new WorkflowEdge('Select\nProtocol', 'Confirm\nPosition', 0),
    new WorkflowEdge('Confirm\nPosition', 'Scan\nTopo', 0),
    new WorkflowEdge('Scan\nTopo', 'Tomo\nPlan', 0),
    new WorkflowEdge('Tomo\nPlan', 'Scan\nTomo', 0),
    new WorkflowEdge('Scan\nTomo', 'Quality\nCheck', 0),
    new WorkflowEdge('Quality\nCheck', 'Close\nPatient', 0),
    new WorkflowEdge('Emergency\nPatient', 'Select\nProtocol', 0),
    new WorkflowEdge('Select\nProtocol', 'Auto\nPosition', 0),
    new WorkflowEdge('Auto\nPosition', 'Scan\nTopo', 0),
    new WorkflowEdge('Quality\nCheck', 'Recon', 0),
    new WorkflowEdge('Recon', 'Close\nPatient', 0),
    new WorkflowEdge('Select\nProtocol', 'Close\nPatient', -0.3),
    new WorkflowEdge('Confirm\nPosition', 'Close\nPatient', -0.3),
    new WorkflowEdge('Tomo\nPlan', 'Close\nPatient', -0.3),
  ];

  exceptionPositions = [
    { x: 200, y: 50},
    { x: 300, y: 100},
    { x: 300, y: 300},
    { x: 400, y: 400},
    { x: 500, y: 450},
    { x: 700, y: 300},
    { x: 800, y: 350},
    { x: 800, y: 550},
  ];

  chartOption;

  graphEcharts;

  graphOption;

  constructor( private taskInfoService: TaskInfoService, private databaseService: DatabaseService, private es: NgxEchartsService) {

  }

  ngOnInit() {
    this.onAnalysisTasksInit();

    this.onChatInit();

    this.onGraphInit();

  }

  onChatInit() {

    this.chartOption = {
      tooltip: {},
      animationDurationUpdate: 2000,
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
          data: this.dataInit( this.workflowData ),
          links: this.linkInit( this.workflowLink ),
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

  dataInit( nodes: WorkflowNode[] ){
    const data = [];
    for (let i = 0; i < nodes.length; i++){
      const node = { name: '', x: 0, y: 0, itemStyle: { color: '#4682B4', borderColor: null, borderWidth: 0}};
      node.name = nodes[i].name;
      node.x = nodes[i].x;
      node.y = nodes[i].y;
      if (nodes[i].isHightLight)
      {
        node.itemStyle.borderColor = '#FFD700';
        node.itemStyle.borderWidth = 2;
      }
      if (nodes[i].isException)
      {
        node.itemStyle.color = '#FF0000';
        node.itemStyle.borderColor = '#FFD700';
        node.itemStyle.borderWidth = 2;
      }
      data.push(node);
    }
    return data;
  }

  linkInit( edges: WorkflowEdge[] ){
    const links = [];
    for (let i = 0; i < edges.length; i++){
      const link = { source: '', target: '', lineStyle: { normal: { curveness: 0}}};
      link.source = edges[i].source;
      link.target = edges[i].target;
      link.lineStyle.normal.curveness = edges[i].curveness;
      links.push(link);
    }
    return links;
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

  onAnalysisTasksInit(){
    this.myAnalysisTasks = this.taskInfoService.getAnalysisTasks();
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

  onClick( curTask: AnalysisTask){
    this.curUserBehaviors = new Array<string>();
    console.log(curTask.error);
    for (let i = 0; i <= curTask.error; i++)
    {
      this.curUserBehaviors.push(this.taskInfoService.userBehaviors[i]);
    }
    this.onMatchClick();
  }

  onMatchClick() {
    this.myKbChart = this.es.echarts.getInstanceByDom(document.getElementById('kb-chart'));
    if (this.myKbChart === undefined)
    {
      console.log("myKbChart is invalid.");
      return;
    }

    let taskData = [];
    let taskLink = [];
    this.workflowLink.forEach( (value) => {
      taskLink.push(value);
    });
    taskData = this.setHighLightNodes();
    taskLink = this.insertErrorLink( taskLink);

    this.chartOption.series[0].data = this.dataInit(taskData);
    this.chartOption.series[0].links = this.linkInit(taskLink);

    this.myKbChart.setOption(this.chartOption);

  }

  setHighLightNodes(): any {
    let taskData = [];
    for (let i = 0; i < this.workflowData.length; i++)
    {
      const node = this.clone(this.workflowData[i]);
      if (i < this.curUserBehaviors.length)
      {
        node.isHightLight = true;
      }
      taskData.push(node);
    }
    taskData = this.insertErrorNode( taskData);
    return taskData;
  }

  insertErrorNode( taskData: WorkflowNode[] ): any {
    const curTaskData = taskData;
    const position = this.exceptionPositions[this.curUserBehaviors.length - 1];

    const node = new WorkflowNode( 'Error',  position.x, position.y, false, true);
    curTaskData.push(node);

    return curTaskData;
  }

  insertErrorLink( taskLink: WorkflowEdge[] ): any {
    const curTaskLink = taskLink;
    const position = this.exceptionPositions[this.curUserBehaviors.length - 1];
    console.log(position);
    const link = new WorkflowEdge('', 'Error', 0);
    link.source = this.workflowData[this.curUserBehaviors.length - 1].name;
    link.target = 'Error';
    curTaskLink.push(link);
    return curTaskLink;
  }

  private KBChartReset() {
    this.chartOption.series[0].data = this.dataInit( this.workflowData );
    this.chartOption.series[0].links = this.linkInit( this.workflowLink );
    this.myKbChart.setOption(this.chartOption);
  }

  clone (obj) {
    return JSON.parse(JSON.stringify(obj));
  }

}

export class WorkflowNode {
  constructor(
    public name: string,
    public x: number,
    public y: number,
    public isHightLight: boolean,
    public isException: boolean
  ){

  }

}

export class WorkflowEdge {
  constructor(
    public source: string,
    public target: string,
    public curveness: number
  ){

  }
}
