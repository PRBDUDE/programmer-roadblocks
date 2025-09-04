import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AccordionComponent} from './accordion.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {AccordionModule} from "primeng/accordion";
import {AccordionOptionsComponent} from "./accordion-options/accordion-options.component";
import {JobHeaderComponent} from "./job-header/job-header.component";
import {JobStatusComponent} from "./job-status/job-status.component";
import {JobDateComponent} from "./job-date/job-date.component";

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AccordionModule,
        AccordionOptionsComponent,
        JobHeaderComponent,
        JobStatusComponent,
        JobDateComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
