import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ColorPaletteGeneratorComponent} from './color-palette-generator.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideZonelessChangeDetection} from "@angular/core";

describe('PalateGeneratorComponent', () => {
  let component: ColorPaletteGeneratorComponent;
  let fixture: ComponentFixture<ColorPaletteGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ColorPaletteGeneratorComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorPaletteGeneratorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
