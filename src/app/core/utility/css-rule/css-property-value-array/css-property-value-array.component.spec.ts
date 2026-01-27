import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CssPropertyValueArrayComponent} from './css-property-value-array.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideZonelessChangeDetection} from "@angular/core";

describe('CssPropertyValueArrayComponent', () => {
  let component: CssPropertyValueArrayComponent;
  let fixture: ComponentFixture<CssPropertyValueArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CssPropertyValueArrayComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CssPropertyValueArrayComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
