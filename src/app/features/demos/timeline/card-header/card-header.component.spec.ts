import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardHeaderComponent} from './card-header.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideZonelessChangeDetection} from "@angular/core";

describe('CardHeaderComponent', () => {
  let component: CardHeaderComponent;
  let fixture: ComponentFixture<CardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardHeaderComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CardHeaderComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('status', 'success');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
