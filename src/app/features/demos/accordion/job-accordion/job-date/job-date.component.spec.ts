import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDateComponent } from './job-date.component';

describe('JobDateComponent', () => {
  let component: JobDateComponent;
  let fixture: ComponentFixture<JobDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
