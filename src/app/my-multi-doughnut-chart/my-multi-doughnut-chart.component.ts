import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-my-multi-doughnut-chart',
  templateUrl: './my-multi-doughnut-chart.component.html',
  styleUrls: ['./my-multi-doughnut-chart.component.css']
})
export class MyMultiDoughnutChartComponent implements OnInit {
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Doughnut Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 120],
    [50, 150, 120, 40],
    [250, 130, 70, 130],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit() {
  }

}
