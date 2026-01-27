import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StepsFourComponent} from './steps-four.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideZonelessChangeDetection} from "@angular/core";

describe('StepFourComponent', () => {
  let component: StepsFourComponent;
  let fixture: ComponentFixture<StepsFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StepsFourComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StepsFourComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
