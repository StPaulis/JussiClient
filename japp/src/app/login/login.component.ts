import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { doesNotThrow } from 'assert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  user = "";
  pass= '';
  constructor() { }

  ngOnInit() {
  }

  // requireLogin(): boolean {
  //   if (localStorage.getItem("RedHouse") === "973BD4A1") {
  //     return false;
  //   }
  //   return true;
  // }

  isSuccess(): boolean {

    console.log(this.pass,this.user);
    if (this.pass === "tricky" && this.user === "RedHouse") {
      localStorage.setItem("RedHouse", "973BD4A1");
      window.location.reload();
      return true;
    }
    else {
      alert("Wrong Credentials");
    }
    return false;
  }
}
