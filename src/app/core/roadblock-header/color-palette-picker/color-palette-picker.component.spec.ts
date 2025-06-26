import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPalettePickerComponent } from './color-palette-picker.component';

describe('ColorPalettePickerComponent', () => {
  let component: ColorPalettePickerComponent;
  let fixture: ComponentFixture<ColorPalettePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPalettePickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorPalettePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
