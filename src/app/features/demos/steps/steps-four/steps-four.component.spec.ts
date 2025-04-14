import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsFourComponent } from './steps-four.component';

describe('StepFourComponent', () => {
  let component: StepsFourComponent;
  let fixture: ComponentFixture<StepsFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
