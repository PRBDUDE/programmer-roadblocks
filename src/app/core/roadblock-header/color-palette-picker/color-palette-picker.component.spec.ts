import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ColorPalettePickerComponent} from './color-palette-picker.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideHttpClient} from "@angular/common/http";

describe('ColorPalettePickerComponent', () => {
  let component: ColorPalettePickerComponent;
  let fixture: ComponentFixture<ColorPalettePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ColorPalettePickerComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorPalettePickerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
