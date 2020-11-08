 import { Component, OnInit } from '@angular/core';
 import { AfterViewInit } from '@angular/core';
 import * as Chart from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
ngOnInit() {
  
}
  // canvas: any;
  // ctx: any;

  // ngAfterViewInit() {
  //   this.canvas = document.getElementById('myChart');
  //   this.ctx = this.canvas.getContext('2d');
  //   let myChart = new Chart(this.ctx, {
  //     type : 'bar',
  //     data: {
  //       labels:['A', 'B', 'C', 'D'],
  //       datasets:[{
  //         label:'Population',
  //         data:[
  //           5,
  //           14,
  //           9,
  //           18
  //         ],
  //         backgroundColor: 'lightgreen'
  //       }]
  //     },
  //     options:{}
  //   });
            
  // }
}