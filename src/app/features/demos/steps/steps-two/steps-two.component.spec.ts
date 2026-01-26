import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StepsTwoComponent} from './steps-two.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('StepTwoComponent', () => {
  let component: StepsTwoComponent;
  let fixture: ComponentFixture<StepsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StepsTwoComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StepsTwoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
