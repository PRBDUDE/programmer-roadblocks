import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ColorPaletteComponent} from './color-palette.component';
import {ColorPaletteGeneratorComponent} from "./color-palette-generator/color-palette-generator.component";
import {InputText} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {AccordionModule} from "primeng/accordion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('ColorPaletteComponent', () => {
  let component: ColorPaletteComponent;
  let fixture: ComponentFixture<ColorPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AccordionModule,
        ColorPaletteComponent,
        ColorPaletteGeneratorComponent,
        InputText,
        FormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorPaletteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
