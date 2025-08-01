import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StepperComponent} from './stepper.component';
import {provideAnimations} from "@angular/platform-browser/animations";

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StepperComponent
      ],
      providers: [
        provideAnimations()
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
