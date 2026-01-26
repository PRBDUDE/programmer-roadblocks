import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JobHeaderComponent} from './job-header.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('JobHeaderComponent', () => {
  let component: JobHeaderComponent;
  let fixture: ComponentFixture<JobHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        JobHeaderComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(JobHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
