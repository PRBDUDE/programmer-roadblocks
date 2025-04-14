import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsOneComponent } from './steps-one.component';

describe('StepOneComponent', () => {
  let component: StepsOneComponent;
  let fixture: ComponentFixture<StepsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
