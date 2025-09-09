import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobHeaderComponent } from './job-header.component';

describe('JobHeaderComponent', () => {
  let component: JobHeaderComponent;
  let fixture: ComponentFixture<JobHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
