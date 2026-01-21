import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ColorPaletteComponent} from './color-palette.component';
import {ColorPaletteGeneratorComponent} from "./color-palette-generator/color-palette-generator.component";
import {InputText} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {AccordionModule} from "primeng/accordion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('ColorPaletteComponent', () => {
  let component: ColorPaletteComponent;
  let fixture: ComponentFixture<ColorPaletteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AccordionModule,
        ColorPaletteComponent,
        ColorPaletteGeneratorComponent,
        InputText,
        FormsModule,
        BrowserAnimationsModule
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
