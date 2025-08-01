import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ReactiveErrorComponent} from './reactive-error.component';

describe('ReactiveErrorComponent', () => {
  let component: ReactiveErrorComponent;
  let fixture: ComponentFixture<ReactiveErrorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveErrorComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
