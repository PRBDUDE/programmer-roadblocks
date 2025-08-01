import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StepperFourComponent} from './stepper-four.component';

describe('StepFourComponent', () => {
  let component: StepperFourComponent;
  let fixture: ComponentFixture<StepperFourComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StepperFourComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
