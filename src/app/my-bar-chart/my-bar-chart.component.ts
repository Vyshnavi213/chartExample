import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import * as Chart from 'chart.js';
// import 'chartjs-plugin-labels';


@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  // public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // public barChartType = 'bar';
  // public barChartLegend = true;
  // public barChartData = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  // ];
  // public barChartOptions = {
  //   responsive: true
  // }



  constructor() { }
  ngOnInit() {
    let ctx = <HTMLCanvasElement>document.getElementById('charts');
    let charts = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["2015-01", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "2015-09", "2015-10", "2015-11", "2015-12"],
        datasets: [{
          data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
          label: 'Series A',
          backgroundColor: "lightblue",
          borderColor: "blue",
          borderWidth: 2,
          hoverBackgroundColor: "red"
        }]
      },
      options: {
        // plugins:{
        //   labels:{
        //     render: 'value'
        //   }
        // },
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
              meta.data.forEach(function (bar, index) {
                var data = dataset.data[index];
                ctx.fillText(data, bar._model.x, bar._model.y + 5);
              });
            });
          }
        },
        legend: {
          "display": false
        },

        title: {
          display: true,
          text: 'Chart.js Bar Chart'
        },
        tooltips: {
          enabled: true,
          mode: 'index',
          intersect: false
        },
        responsive: true,
        scales: {
          xAxes: [{
            barPercentage: 0.5,
            // barThickness: 60,
            maxBarThickness: 80,
            // minBarLength: 2,
            stacked: false
          }],
          yAxes: [{
            ticks: {
              beginAtZero: false,
            }
          }]
        },
      }
    });
  }
}
