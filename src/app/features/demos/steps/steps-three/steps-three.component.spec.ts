import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsThreeComponent } from './steps-three.component';

describe('StepThreeComponent', () => {
  let component: StepsThreeComponent;
  let fixture: ComponentFixture<StepsThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
