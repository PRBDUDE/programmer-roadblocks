import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CssPropertyValueComponent} from './css-property-value.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('CssPropertyValueComponent', () => {
  let component: CssPropertyValueComponent;
  let fixture: ComponentFixture<CssPropertyValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CssPropertyValueComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CssPropertyValueComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
