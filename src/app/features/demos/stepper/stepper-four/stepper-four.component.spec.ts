import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StepperFourComponent} from './stepper-four.component';

describe('StepFourComponent', () => {
  let component: StepperFourComponent;
  let fixture: ComponentFixture<StepperFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StepperFourComponent
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
