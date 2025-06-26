import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ColorPaletteComponent} from './color-palette.component';
import {ColorPaletteGeneratorComponent} from "./color-palette-generator/color-palette-generator.component";
import {InputText} from "primeng/inputtext";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

describe('ColorPaletteComponent', () => {
  let component: ColorPaletteComponent;
  let fixture: ComponentFixture<ColorPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ColorPaletteComponent,
        ColorPaletteGeneratorComponent,
        InputText,
        FormsModule,
        NgForOf
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
