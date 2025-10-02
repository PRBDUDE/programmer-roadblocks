import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {JobAccordionComponent} from './job-accordion.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideHttpClient} from "@angular/common/http";

describe('JobAccordionComponent', () => {
  let component: JobAccordionComponent;
  let fixture: ComponentFixture<JobAccordionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        JobAccordionComponent
      ],
      providers: [
        provideHttpClientTesting(),
        provideHttpClient()
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
