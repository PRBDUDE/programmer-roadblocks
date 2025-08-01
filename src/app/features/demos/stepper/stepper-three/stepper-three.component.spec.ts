import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StepperThreeComponent} from './stepper-three.component';

describe('StepThreeComponent', () => {
  let component: StepperThreeComponent;
  let fixture: ComponentFixture<StepperThreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StepperThreeComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
