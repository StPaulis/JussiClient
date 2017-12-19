import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  requireLogin(): boolean{
    if( localStorage.getItem("RedHouse") === "tricky" ){
      return false;
    }
    return true;
  }
}
