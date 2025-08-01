import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StepperOneComponent} from './stepper-one.component';

describe('StepOneComponent', () => {
  let component: StepperOneComponent;
  let fixture: ComponentFixture<StepperOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StepperOneComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
