import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Tooltip} from "primeng/tooltip";
import {$dt} from "@primeuix/styled";
import {setPrimaryColor} from "@utility/set-primary-color";
import {NgClass} from "@angular/common";
import {setSurfaceColor} from "@utility/set-surface-color";
import {isPrbMode, prbModes} from "@utility/is-prb-mode";

@Component({
  selector: 'prb-color-palette',
  imports: [
    FormsModule,
    Tooltip,
    NgClass
  ],
  templateUrl: './color-palette-picker.component.html',
  styleUrl: './color-palette-picker.component.scss'
})
export class ColorPalettePickerComponent {
  protected readonly setPrimaryColor = setPrimaryColor;
  protected readonly setSurfaceColor = setSurfaceColor;
  protected readonly prbModes = prbModes;
  protected readonly isMode = isPrbMode;

  private getColorValue(color: string) {
    let colorValue: any;
    try {
      colorValue = $dt(color + '.500').value;
    } catch (error) {
      console.error('Error getting color value for ' + color + ': ' + error);
      return undefined;
    }
    return colorValue;
  }

  isPrimaryColor(color: string) {
    const colorValue = this.getColorValue(color);
    if (!colorValue) {
      return false;
    }
    return this.getColorValue(color) === this.getColorValue('primary');
  }

  isSurfaceColor(color: string) {
    const colorValue = this.getColorValue(color);
    let surfaceValue;
    surfaceValue = this.getColorValue('surface');
    if (!surfaceValue) {
      return false;
    }
    if (isPrbMode(prbModes.dark)) {
      surfaceValue = surfaceValue.dark?.value;
    } else {
      surfaceValue = surfaceValue.light?.value;
    }
    return colorValue === surfaceValue;
  }
}
