import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NodesDataListComponent } from './nodes-data-list/nodes-data-list.component';
import { NodesDataService } from './services/nodes-data.service';
import { PreferencesComponent } from './preferences/preferences.component';
import { LoginComponent } from './login/login.component';
import { OutDataListComponent } from './out-data-list/out-data-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NodesDataListComponent,
    PreferencesComponent,
    LoginComponent,
    OutDataListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [NodesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
