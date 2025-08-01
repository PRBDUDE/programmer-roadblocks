import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ReactiveErrorComponent} from './reactive-error.component';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

describe('ReactiveErrorComponent', () => {
  let component: ReactiveErrorComponent;
  let fixture: ComponentFixture<ReactiveErrorComponent>;
  let formControl: FormControl;

  beforeEach(waitForAsync(() => {
    formControl = new FormControl('');

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
    component.formControl = formControl;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
