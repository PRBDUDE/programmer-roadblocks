import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAccordionComponent } from './job-accordion.component';

describe('JobAccordionComponent', () => {
  let component: JobAccordionComponent;
  let fixture: ComponentFixture<JobAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
