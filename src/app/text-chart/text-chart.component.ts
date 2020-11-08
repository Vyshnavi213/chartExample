import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import * as Chart from 'chart.js';

import { SingleDataSet, MultiDataSet, Label, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';
@Component({
  selector: 'app-text-chart',
  templateUrl: './text-chart.component.html',
  styleUrls: ['./text-chart.component.css']
})
export class TextChartComponent implements OnInit {
  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';
  // public doughnutChartOptions:any = [{
  //   legend: { display: false, labels: { fontColor: 'black' }}
  // }];
  // innerRadius:number;
public doughnutChartPlugins: PluginServiceGlobalRegistrationAndOptions[] = [{
  beforeDraw(chart) {
    const ctx = chart.ctx;
    const txt = 'Text in the doughnut';
    const text = 'Text in the doughnut doughnut';

    //Get options from the center object in options
    // const sidePadding = 60;
    // const sidePaddingCalculated = (sidePadding / 100) * (this.innerRadius * 2)

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
    const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);

    //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
    // const stringWidth = ctx.measureText(text).width;
    // const elementWidth = (this.innerRadius * 2) - sidePaddingCalculated;


    // Find out how much the font can grow in width.
    // const widthRatio = elementWidth / stringWidth;
    // const newFontSize = Math.floor(30 * widthRatio);
    // const elementHeight = (this.innerRadius * 2);
    // console.log(this.innerRadius);

    // const fontSizeToUse = Math.min(newFontSize, elementHeight);

    // ctx.font = fontSizeToUse + 'px Arial';
    // ctx.fillStyle = 'blue';

    ctx.fillText(txt, centerX, centerY);
    ctx.fillText(text, centerX, centerY + 20);

  }
}];

constructor() { }

ngOnInit() {
}

}
