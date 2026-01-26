import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveErrorComponent} from './reactive-error.component';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('ReactiveErrorComponent', () => {
  let component: ReactiveErrorComponent;
  let fixture: ComponentFixture<ReactiveErrorComponent>;
  let formControl: FormControl;

  beforeEach(async () => {
    formControl = new FormControl('');

    TestBed.configureTestingModule({
      imports: [
        ReactiveErrorComponent,
        ReactiveFormsModule
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveErrorComponent);
    component = fixture.componentInstance;
    component.formControl = formControl;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
