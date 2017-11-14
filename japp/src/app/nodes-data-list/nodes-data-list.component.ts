import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { NodesDataService } from './../services/nodes-data.service';
import { NodesData } from './../nodes-data';
import { Node } from './../node';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-nodes-data-list',
  templateUrl: './nodes-data-list.component.html',
  styleUrls: ['./nodes-data-list.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class NodesDataListComponent implements OnInit {

  dataArray: Array<NodesData> = [];
  status: Node;
  error: string = '';
  constructor(private nodeDataService: NodesDataService,
    private http: Http
  ) {
  }

  ngOnInit() {
    this.nodeDataService.getNodeStatus()
      .subscribe(status => this.status = status);

    this.nodeDataService.getNodeTemp()
      .subscribe(
      data => this.dataArray = [data, ...this.dataArray],
      error => this.error = error.statusText
      );

    this.nodeDataService.getNodeHum()
      .subscribe(
      data => this.dataArray = [data, ...this.dataArray],
      error => this.error = error.statusText
      );

  }

  public waterOn(event) {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify({ ID: 4, Name: "Red House", IP: "192.168.1.2", City: "Neo Ikonio", Country: "Greece", IsPouring: 0 });
    this.http
    //.put('http://localhost:49608/api/node/4', body, { headers })
      .put('http://jussi.gearhostpreview.com//api/node/4', body, { headers })
      .subscribe(r => r);
      this.sleep(2);
  }

  public waterOff(event) {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify({ ID: 4, Name: "Red House", IP: "192.168.1.2", City: "Neo Ikonio", Country: "Greece", IsPouring: 1 });
    this.http
      .put('http://localhost:49608/api/node/4', body, { headers })
      .subscribe(r => r);
      this.sleep(2);
  }
  // @Input('dataArray') dataAr: NodesData;
  sleep(seconds) 
  {
    var e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) {}
  }
}
