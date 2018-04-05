import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class NodesDataService {

  public dataSubject = new Subject<any>();
  constructor(private http: Http) { }

  getNodeTemp() {
    return this.http.get('http://jussi.gearhostpreview.com/api/data?dataTypeID=1')
      .map(res => res.json());
  }

  getNodeHum() {
    return this.http.get('http://jussi.gearhostpreview.com/api/data?dataTypeID=2')
      .map(res => res.json());
  }

  getNodeStatus() {
    return this.http.get('http://jussi.gearhostpreview.com/api/node/4', )
      .map(res => res.json());
  }

  getNodeOutData() {
    return this.http.get('https://api.apixu.com/v1/current.json?key=fbde438837f948708d7183205170610&q=Neo_Ikonio')
      .map(res => res.json());
  }
}
