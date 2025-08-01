import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {TimelineOptionsComponent} from './timeline-options.component';

describe('TimelineOptionsComponent', () => {
  let component: TimelineOptionsComponent;
  let fixture: ComponentFixture<TimelineOptionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TimelineOptionsComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
