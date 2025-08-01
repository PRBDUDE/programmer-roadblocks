import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StepperTwoComponent} from './stepper-two.component';

describe('StepTwoComponent', () => {
  let component: StepperTwoComponent;
  let fixture: ComponentFixture<StepperTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StepperTwoComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
