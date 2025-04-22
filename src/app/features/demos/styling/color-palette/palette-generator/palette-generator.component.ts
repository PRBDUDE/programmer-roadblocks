import {Component, input, Input} from '@angular/core';
import {palette} from "@primeng/themes";
import {InputText} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";

export type PaletteShades = { [p: string]: string };

@Component({
  selector: 'prb-palette-generator',
  imports: [
    InputText,
    FormsModule,
    TableModule
  ],
  templateUrl: './palette-generator.component.html',
  styleUrl: './palette-generator.component.scss'
})
export class PaletteGeneratorComponent {
  colorName = input<string>('');
  isSurfaceColor = input<boolean>(false);

  _baseColor: string = '#14b8a6';

  @Input()
  set baseColor(value: string) {
    this._baseColor = value;
    this.generatePalette();
  }

  get baseColor(): string {
    return this._baseColor;
  }

  shades: string[] = [];
  colorValues: PaletteShades = {};

  tableData = {
    datatable: {
      header: {
        padding: 'none'
      }
    }
  }

  generatePalette() {
    if (this.isSurfaceColor()) {
      this.colorValues = {
        0: "#ffffff",
        ...palette(this.baseColor)
      };
    } else {
      this.colorValues = palette(this.baseColor);
    }
    if (this.colorValues) {
      this.shades = Object.keys(this.colorValues);
    }

    const colorNameKey = this.colorName().toLowerCase();
    const nestedColorValues = {
      [colorNameKey]: this.colorValues
    };
    console.log(nestedColorValues);
  }
}
