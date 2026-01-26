import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StepsOneComponent} from './steps-one.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('StepOneComponent', () => {
  let component: StepsOneComponent;
  let fixture: ComponentFixture<StepsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StepsOneComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StepsOneComponent);
    component = fixture.componentInstance;
    await fixture.whenStable()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
