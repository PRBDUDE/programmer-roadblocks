import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StepperFourComponent} from './stepper-four.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideZonelessChangeDetection} from "@angular/core";

describe('StepFourComponent', () => {
  let component: StepperFourComponent;
  let fixture: ComponentFixture<StepperFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StepperFourComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StepperFourComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
