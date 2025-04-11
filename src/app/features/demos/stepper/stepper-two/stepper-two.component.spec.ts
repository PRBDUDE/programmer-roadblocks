import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperTwoComponent } from './stepper-two.component';

describe('StepTwoComponent', () => {
  let component: StepperTwoComponent;
  let fixture: ComponentFixture<StepperTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
