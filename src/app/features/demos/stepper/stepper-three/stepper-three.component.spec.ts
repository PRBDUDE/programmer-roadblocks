import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperThreeComponent } from './stepper-three.component';

describe('StepThreeComponent', () => {
  let component: StepperThreeComponent;
  let fixture: ComponentFixture<StepperThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
