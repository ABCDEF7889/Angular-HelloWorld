import { NgModule,NO_ERRORS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
// import { PlotlyModule } from 'angular-plotly.js';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  imports:      [ BrowserModule ,
    // PlotlyModule,
    RouterModule.forRoot(
      [
        { path: 'widgetexample', component: WidgetComponent }
      ]
    )],
    providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  declarations: [ AppComponent,WidgetComponent],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }