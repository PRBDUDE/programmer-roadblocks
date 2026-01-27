import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DebugOutputCardComponent} from './debug-output-card.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideZonelessChangeDetection} from "@angular/core";

describe('DebugOutputCardComponent', () => {
  let component: DebugOutputCardComponent;
  let fixture: ComponentFixture<DebugOutputCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DebugOutputCardComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DebugOutputCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
