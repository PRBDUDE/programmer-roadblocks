import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StepsOneComponent} from './steps-one.component';

describe('StepOneComponent', () => {
  let component: StepsOneComponent;
  let fixture: ComponentFixture<StepsOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StepsOneComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
