import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-chartn',
  templateUrl: './chartn.component.html',
  styleUrls: ['./chartn.component.css']
})
export class ChartnComponent implements AfterViewInit {

  canvas: any;
  ctx: any;
  constructor() { }

  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
          labels: ["New", "In Progress", "On Hold"],
          datasets: [{
              label: '# of Votes',
              data: [4,6,9],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {}
    });
  }
 
 
}

