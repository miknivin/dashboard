import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
HighchartsMore(Highcharts);
import SolidGauge from 'highcharts/modules/solid-gauge';
import * as Highcharts from 'highcharts';
SolidGauge(Highcharts);
// Import ng-circle-progress
import { NgCircleProgressModule } from "ng-circle-progress";


@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      backgroundColor: "teal",
      backgroundPadding: 8,
      radius: 60,
      space: -15,
      maxPercent: 100,
      unitsColor: "#ffffff",
      outerStrokeWidth: 7.5,
      outerStrokeColor: "white",
      innerStrokeColor: "transparent",
      innerStrokeWidth: 3,
      titleColor: "#ffffff",
      subtitleColor: "#fff",
    }),
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    ChartModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
