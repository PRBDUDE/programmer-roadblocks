import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CssPropertyNameComponent} from './css-property-name.component';

describe('CssPropertyNameComponent', () => {
  let component: CssPropertyNameComponent;
  let fixture: ComponentFixture<CssPropertyNameComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CssPropertyNameComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssPropertyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
