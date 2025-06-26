import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ColorPaletteGeneratorComponent} from './color-palette-generator.component';

describe('PalateGeneratorComponent', () => {
  let component: ColorPaletteGeneratorComponent;
  let fixture: ComponentFixture<ColorPaletteGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPaletteGeneratorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorPaletteGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
