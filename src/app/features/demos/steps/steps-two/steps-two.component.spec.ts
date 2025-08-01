import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StepsTwoComponent} from './steps-two.component';

describe('StepTwoComponent', () => {
  let component: StepsTwoComponent;
  let fixture: ComponentFixture<StepsTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StepsTwoComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
