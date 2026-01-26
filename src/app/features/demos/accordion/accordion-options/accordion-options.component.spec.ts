import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AccordionOptionsComponent} from './accordion-options.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('AccordionOptionsComponent', () => {
  let component: AccordionOptionsComponent;
  let fixture: ComponentFixture<AccordionOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AccordionOptionsComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionOptionsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
