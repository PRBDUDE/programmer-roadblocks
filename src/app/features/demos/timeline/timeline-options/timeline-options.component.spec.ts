import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineOptionsComponent } from './timeline-options.component';

describe('TimelineOptionsComponent', () => {
  let component: TimelineOptionsComponent;
  let fixture: ComponentFixture<TimelineOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
