import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardComponent} from './card.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideZonelessChangeDetection} from "@angular/core";

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    const eventData = {
      "status": "OK",
      "date": new Date(),
      "description": "Completed"
    }
    fixture.componentRef.setInput('eventItem', eventData);
    await fixture.whenStable()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
