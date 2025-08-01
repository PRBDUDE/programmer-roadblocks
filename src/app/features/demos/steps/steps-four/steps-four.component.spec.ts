import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StepsFourComponent} from './steps-four.component';

describe('StepFourComponent', () => {
  let component: StepsFourComponent;
  let fixture: ComponentFixture<StepsFourComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StepsFourComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
