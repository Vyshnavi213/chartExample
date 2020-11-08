import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {


  //   public lineChartData: ChartDataSets[] = [
  //     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   ];
  //   public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  //   public lineChartOptions = {
  //     responsive: true,
  //   };
  //   public lineChartColors: Color[] = [
  //     {
  //       borderColor: 'black',
  //       backgroundColor: 'rgba(255,0,0,0.3)',
  //     },
  //   ];
  //   public lineChartLegend = true;
  //   public lineChartType = 'line';
  //   // public lineChartPlugins = [];
  //   constructor() { }

  //   ngOnInit() {
  //   }

  // }

  constructor() { }
  ngOnInit() {
    let ctx = <HTMLCanvasElement>document.getElementById('main');
    let charts = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          borderColor: 'black',
          borderWidth: 2,
          backgroundColor: 'rgba(255,0,0,0.3)'
        }]
      },
      options: {
        "hover": {
          "animationDuration": 0
        },
        "animation": {
          "duration": 1,
          "onComplete": function () {
            var chartInstance = this.chart,
              ctx = chartInstance.ctx;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            this.data.datasets.forEach(function (dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function (line, index) {
                var data = dataset.data[index];
                ctx.fillText(data, line._model.x, line._model.y - 25);
              });
            });
          }
        },
        legend: {
          display: false
        },

        title: {
          display: true,
          text: 'Chart.js Line Chart'
        },
        tooltips: {
          enabled: true,
          mode: 'index',
          intersect: false
        },
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}