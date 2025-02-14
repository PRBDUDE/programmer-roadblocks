import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CssRuleComponent} from './css-rule.component';

describe('CssPropertyComponent', () => {
  let component: CssRuleComponent;
  let fixture: ComponentFixture<CssRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CssRuleComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CssRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
