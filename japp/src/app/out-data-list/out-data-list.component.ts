import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { OutData } from './out-data';
import { Observable } from 'rxjs/Observable';
import { NodesDataService } from './../services/nodes-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-out-data-list',
  templateUrl: './out-data-list.component.html',
  styleUrls: ['./out-data-list.component.css']
})
export class OutDataListComponent implements OnInit, OnDestroy {

  dataDs: OutData = null;
  public sub: Subscription;
  constructor(private http: Http) { }

  ngOnInit() {
    // this.sub = this.nodeDataService.getNodeOutData()
    //   .subscribe(status => {
    //     this.dataDs = status;
    //   });
    this.sub = this.http.get('https://api.apixu.com/v1/current.json?key=fbde438837f948708d7183205170610&q=Neo_Ikonio')
      .map(res => res.json()).subscribe(res => this.dataDs = res);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
