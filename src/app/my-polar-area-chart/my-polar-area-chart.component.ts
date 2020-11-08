import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-my-polar-area-chart',
  templateUrl: './my-polar-area-chart.component.html',
  styleUrls: ['./my-polar-area-chart.component.css']
})
export class MyPolarAreaChartComponent implements OnInit {
  public polarAreaChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;
  public polarAreaChartType: ChartType = 'polarArea';

  constructor() { }

  ngOnInit() {
  }

}
