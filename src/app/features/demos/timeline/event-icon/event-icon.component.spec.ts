import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventIconComponent } from './event-icon.component';

describe('EventIconComponent', () => {
  let component: EventIconComponent;
  let fixture: ComponentFixture<EventIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
