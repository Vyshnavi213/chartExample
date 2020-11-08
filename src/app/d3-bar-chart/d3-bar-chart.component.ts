import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-bar-chart',
  templateUrl: './d3-bar-chart.component.html',
  styleUrls: ['./d3-bar-chart.component.css']
})
export class D3BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var data = [4, 8, 15, 16, 23, 42, 20];

    var x = d3.scaleLinear()
      .domain([d3.min(data), d3.max(data)])
      .range([0, 420]);

    d3.select("#chart")
      .selectAll("div")
      .data(data)
      .enter().append("svg")
      .style("width", function (d) { return x(d) + "px"; })
      .style("background-color", 'steelblue')
      .style('display', 'block')
      .style('margin-bottom', '10')
      .style('height', '20');
      
  }

}
