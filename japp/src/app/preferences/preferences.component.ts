import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PreferencesComponent implements OnInit {
  public isActive = true;
  constructor() { }

  ngOnInit() {
    this.isActive = true;
  }

  onShowDetails() {
    this.isActive = !this.isActive;
  }

}
