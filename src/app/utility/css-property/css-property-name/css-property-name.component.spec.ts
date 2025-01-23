import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssPropertyNameComponent } from './css-property-name.component';

describe('CssPropertyNameComponent', () => {
  let component: CssPropertyNameComponent;
  let fixture: ComponentFixture<CssPropertyNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssPropertyNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssPropertyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
