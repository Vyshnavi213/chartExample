import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPolarAreaChartComponent } from './my-polar-area-chart.component';

describe('MyPolarAreaChartComponent', () => {
  let component: MyPolarAreaChartComponent;
  let fixture: ComponentFixture<MyPolarAreaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPolarAreaChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPolarAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
