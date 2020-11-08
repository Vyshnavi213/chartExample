import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { MyBubbleChartComponent } from './my-bubble-chart/my-bubble-chart.component';
import { MyMultiDoughnutChartComponent } from './my-multi-doughnut-chart/my-multi-doughnut-chart.component';
import { MyPolarAreaChartComponent } from './my-polar-area-chart/my-polar-area-chart.component';
import { MyScatterChartComponent } from './my-scatter-chart/my-scatter-chart.component';
import { TextChartComponent } from './text-chart/text-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartnComponent } from './chartn/chartn.component';
import { D3BarChartComponent } from './d3-bar-chart/d3-bar-chart.component';
import { D3PieChartComponent } from './d3-pie-chart/d3-pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    MyDoughnutChartComponent,
    MyPieChartComponent,
    MyRadarChartComponent,
    MyLineChartComponent,
    MyBubbleChartComponent,
    MyMultiDoughnutChartComponent,
    MyPolarAreaChartComponent,
    MyScatterChartComponent,
    TextChartComponent,
    BarChartComponent,
    ChartnComponent,
    D3BarChartComponent,
    D3PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    RouterModule.forRoot([
      {
        path: 'my-bar-chart',
        component: MyBarChartComponent
      },
      {
        path: 'my-doughnut-chart',
        component: MyDoughnutChartComponent
      },
      {
        path: 'my-pie-chart',
        component: MyPieChartComponent
      },
      {
        path: 'my-radar-chart',
        component: MyRadarChartComponent
      },
      {
        path: 'my-line-chart',
        component: MyLineChartComponent
      },
      {
        path: 'my-multi-doughnut-chart',
        component: MyMultiDoughnutChartComponent
      },
      {
        path: 'my-polar-area-chart',
        component: MyPolarAreaChartComponent
      },
      {
        path: 'my-scatter-chart',
        component: MyScatterChartComponent
      },
      {
        path:'my-bubble-chart',
        component: MyBubbleChartComponent
      },
      {
        path:'text-chart',
        component: TextChartComponent
      },
      {
        path: 'bar-chart',
        component: BarChartComponent
      },
      {
        path: 'chartn',
        component: ChartnComponent
      },
      {
        path: 'd3-bar-chart',
        component: D3BarChartComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
