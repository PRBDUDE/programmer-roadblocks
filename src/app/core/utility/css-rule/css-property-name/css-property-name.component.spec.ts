import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CssPropertyNameComponent} from './css-property-name.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('CssPropertyNameComponent', () => {
  let component: CssPropertyNameComponent;
  let fixture: ComponentFixture<CssPropertyNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CssPropertyNameComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CssPropertyNameComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
