import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Tooltip} from "primeng/tooltip";
import {$dt} from "@primeng/themes";
import {setPrimaryColor} from "@utility/set-primary-color";
import {NgClass} from "@angular/common";
import {setSurfaceColor} from "@utility/set-surface-color";
import {isMode, prbModes} from "@utility/is-mode";

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

  preset: string | undefined;

  isPrimaryColor(color: string) {
    return $dt(color + '.500').value === $dt('primary.500').value;
  }

  isSurfaceColor(color: string) {
    const colorValue = $dt(color + '.500').value;
    let surfaceValue;
    if (isMode(prbModes.dark)) {
      surfaceValue = $dt('surface.500').value?.dark?.value;
    } else {
      surfaceValue = $dt('surface.500').value?.light?.value;
    }
    return colorValue === surfaceValue;
  }

  protected readonly prbModes = prbModes;
  protected readonly isMode = isMode;
}
