import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SportsComponent } from './sports.component'
import {SportsService} from './sports.service'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    SportsComponent
   ],
  providers: [
    SportsService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
