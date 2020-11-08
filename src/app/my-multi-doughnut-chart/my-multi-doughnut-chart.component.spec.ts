import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMultiDoughnutChartComponent } from './my-multi-doughnut-chart.component';

describe('MyMultiDoughnutChartComponent', () => {
  let component: MyMultiDoughnutChartComponent;
  let fixture: ComponentFixture<MyMultiDoughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMultiDoughnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMultiDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
