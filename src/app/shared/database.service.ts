import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor( private httpClient: HttpClient ) { }

  getGraph(): Observable<Graph> {
    return this.httpClient.get<any>('/api/GraphDB');
  }
}


export class Node {
  constructor(
    public name: string,
    public type: string
  ){

  }
}

export class Edge {
  constructor(
    public source: number,
    public target: number,
    public type: string
  ){

  }
}

export class Graph {
  constructor(
    public nodes: Node[],
    public edges: Edge[]
  ) {
  }
}
