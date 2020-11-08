import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextChartComponent } from './text-chart.component';

describe('TextChartComponent', () => {
  let component: TextChartComponent;
  let fixture: ComponentFixture<TextChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
