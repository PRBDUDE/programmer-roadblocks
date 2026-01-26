import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactiveInputComponent} from './reactive-input.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('ReactiveInputComponent', () => {
  let component: ReactiveInputComponent;
  let fixture: ComponentFixture<ReactiveInputComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveInputComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveInputComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
