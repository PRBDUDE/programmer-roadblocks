import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { VerticalTimelineComponent } from './vertical-timeline.component';

describe('VerticalTimelineComponent', () => {
  let component: VerticalTimelineComponent;
  let fixture: ComponentFixture<VerticalTimelineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        VerticalTimelineComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
