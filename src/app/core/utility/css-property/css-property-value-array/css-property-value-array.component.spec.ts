import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssPropertyValueArrayComponent } from './css-property-value-array.component';

describe('CssPropertyValueArrayComponent', () => {
  let component: CssPropertyValueArrayComponent;
  let fixture: ComponentFixture<CssPropertyValueArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssPropertyValueArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssPropertyValueArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
