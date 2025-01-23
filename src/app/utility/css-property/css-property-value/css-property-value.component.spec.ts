import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssPropertyValueComponent } from './css-property-value.component';

describe('CssPropertyValueComponent', () => {
  let component: CssPropertyValueComponent;
  let fixture: ComponentFixture<CssPropertyValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssPropertyValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssPropertyValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
