import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VerticalTimelineComponent} from './vertical-timeline.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideZonelessChangeDetection} from "@angular/core";

describe('VerticalTimelineComponent', () => {
  let component: VerticalTimelineComponent;
  let fixture: ComponentFixture<VerticalTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        VerticalTimelineComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalTimelineComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
