import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartnComponent } from './chartn.component';

describe('ChartnComponent', () => {
  let component: ChartnComponent;
  let fixture: ComponentFixture<ChartnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
