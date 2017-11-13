import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class NodesDataService {

  public dataSubject = new Subject<any>();
  constructor(private http: Http) { }

  getNodeTemp(){
    // return this.http.get('http://jussi.gearhostpreview.com/api/data?dataTypeID=1')
    return this.http.get('http://localhost:49608/api/data?dataTypeID=1')
    .map(res => res.json())
  }

  getNodeHum(){
    return this.http.get('http://localhost:49608/api/data?dataTypeID=2')
    .map(res => res.json())
  }

  getNodeStatus(){

    return this.http.get('http://localhost:49608/api/node/4',)
    .map(res => res.json())
  }
}
