import {ComponentFixture, TestBed} from '@angular/core/testing';
import {provideNoopAnimations} from '@angular/platform-browser/animations';

import {StaticAccordionComponent} from './static-accordion.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('StaticAccordionComponent', () => {
  let component: StaticAccordionComponent;
  let fixture: ComponentFixture<StaticAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StaticAccordionComponent
      ],
      providers: [
        provideNoopAnimations(),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StaticAccordionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
