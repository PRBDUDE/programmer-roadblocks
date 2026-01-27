import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JobAccordionComponent} from './job-accordion.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideHttpClient} from "@angular/common/http";
import {provideZonelessChangeDetection} from "@angular/core";

describe('JobAccordionComponent', () => {
  let component: JobAccordionComponent;
  let fixture: ComponentFixture<JobAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        JobAccordionComponent
      ],
      providers: [
        provideHttpClientTesting(),
        provideHttpClient(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(JobAccordionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
