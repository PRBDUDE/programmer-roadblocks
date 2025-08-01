import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ReactiveInputComponent} from './reactive-input.component';

describe('ReactiveInputComponent', () => {
  let component: ReactiveInputComponent;
  let fixture: ComponentFixture<ReactiveInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveInputComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
