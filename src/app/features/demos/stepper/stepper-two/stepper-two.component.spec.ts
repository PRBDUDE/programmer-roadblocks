import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StepperTwoComponent} from './stepper-two.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('StepTwoComponent', () => {
  let component: StepperTwoComponent;
  let fixture: ComponentFixture<StepperTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StepperTwoComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StepperTwoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
