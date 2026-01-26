import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StepperThreeComponent} from './stepper-three.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('StepThreeComponent', () => {
  let component: StepperThreeComponent;
  let fixture: ComponentFixture<StepperThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StepperThreeComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StepperThreeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
