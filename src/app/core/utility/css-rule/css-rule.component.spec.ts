import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CssRuleComponent} from './css-rule.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('CssPropertyComponent', () => {
  let component: CssRuleComponent;
  let fixture: ComponentFixture<CssRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CssRuleComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CssRuleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
