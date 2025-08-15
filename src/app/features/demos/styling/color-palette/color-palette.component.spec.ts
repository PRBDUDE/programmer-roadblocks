import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ColorPaletteComponent} from './color-palette.component';
import {ColorPaletteGeneratorComponent} from "./color-palette-generator/color-palette-generator.component";
import {InputText} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";

describe('ColorPaletteComponent', () => {
  let component: ColorPaletteComponent;
  let fixture: ComponentFixture<ColorPaletteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ColorPaletteComponent,
        ColorPaletteGeneratorComponent,
        InputText,
        FormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
