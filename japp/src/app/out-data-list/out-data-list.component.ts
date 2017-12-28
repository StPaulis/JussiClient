import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import {OutData} from './out-data';
import { Observable } from 'rxjs/Observable';
import { NodesDataService } from './../services/nodes-data.service';

@Component({
  selector: 'app-out-data-list',
  templateUrl: './out-data-list.component.html',
  styleUrls: ['./out-data-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OutDataListComponent implements OnInit {

  public data: Observable<OutData>;
  constructor(private http: Http,private nodeDataService: NodesDataService) { }

  ngOnInit() {
    this.nodeDataService.getNodeOutData()
    .subscribe(status => { 
      this.data = status;
      console.log(this.data,status);
    });
  }

}
