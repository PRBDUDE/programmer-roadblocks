import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StepsThreeComponent} from './steps-three.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideZonelessChangeDetection} from "@angular/core";

describe('StepThreeComponent', () => {
  let component: StepsThreeComponent;
  let fixture: ComponentFixture<StepsThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StepsThreeComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StepsThreeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
