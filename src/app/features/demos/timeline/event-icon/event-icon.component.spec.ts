import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventIconComponent} from './event-icon.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideZonelessChangeDetection} from "@angular/core";

describe('EventIconComponent', () => {
  let component: EventIconComponent;
  let fixture: ComponentFixture<EventIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EventIconComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EventIconComponent);
    component = fixture.componentInstance;
    const eventData = {
      "status": "OK",
      "date":  new Date(),
      "description": "Completed"
    }
    fixture.componentRef.setInput('event', eventData);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
