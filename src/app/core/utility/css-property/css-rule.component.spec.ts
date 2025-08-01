import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CssRuleComponent} from './css-rule.component';

describe('CssPropertyComponent', () => {
  let component: CssRuleComponent;
  let fixture: ComponentFixture<CssRuleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CssRuleComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
