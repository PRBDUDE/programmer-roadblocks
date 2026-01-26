import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JobDateComponent} from './job-date.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('JobDateComponent', () => {
  let component: JobDateComponent;
  let fixture: ComponentFixture<JobDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        JobDateComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(JobDateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
