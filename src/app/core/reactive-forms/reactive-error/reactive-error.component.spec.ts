import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ReactiveErrorComponent} from './reactive-error.component';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

describe('ReactiveErrorComponent', () => {
  let component: ReactiveErrorComponent;
  let fixture: ComponentFixture<ReactiveErrorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveErrorComponent,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveErrorComponent);
    component = fixture.componentInstance;
    component.formControl = new FormControl('');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
