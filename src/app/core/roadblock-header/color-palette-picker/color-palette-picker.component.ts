import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Tooltip} from "primeng/tooltip";
import {$dt, updatePrimaryPalette, updateSurfacePalette} from "@primeuix/themes";
import {NgClass} from "@angular/common";
import {isPrbMode, prbModes} from "@utility/is-prb-mode";
import {ToggleSwitch} from "primeng/toggleswitch";
import {PrimeNG} from "primeng/config";
import {ProfileService} from "@services/profile.service";
import {UserProfile} from "@model/user-profile";
import {setPrimaryColor} from "@utility/set-primary-color";
import {setSurfaceColor} from "@utility/set-surface-color";

@Component({
  selector: 'prb-color-palette',
  imports: [
    FormsModule,
    Tooltip,
    NgClass,
    ToggleSwitch
  ],
  templateUrl: './color-palette-picker.component.html',
  styleUrl: './color-palette-picker.component.scss'
})
export class ColorPalettePickerComponent implements OnInit {
  protected readonly prbModes = prbModes;
  protected readonly isMode = isPrbMode;

  profile: UserProfile = {
    id: 1,
    primary: 'sky',
    surface: 'neutral',
    ripple: 'true',
    footer: 'sticky',
    debug: 'true',
    theme: 'dark'
  };

  primeng = inject(PrimeNG);

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe(profile => {
      this.profile.primary = profile.primary;
      this.profile.surface = profile.surface;
      this.profile.ripple = profile.ripple;
      console.log('Loaded profile: ',
        this.profile)
    })
  }

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

  updatePalette() {
    this.profileService.setPalette(this.profile.primary, this.profile.surface, this.profile.ripple === 'true');
    console.log('Updated palette to: ',
      this.profile
    );
  }

  setPrimaryPalette(color: string): void {
    setPrimaryColor(color);
    this.profile.primary = color;
    this.updatePalette();
  }

  setSurfacePalette(color: string) {
    setSurfaceColor(color);
    this.profile.surface = color;
    this.updatePalette();
  }

  setRippleEffect(rippleState: boolean) {
    this.primeng.ripple.set(rippleState);
    this.profile.ripple = rippleState.toString();
    this.updatePalette();
  }

  isRippleEffect() {
    return this.primeng.ripple();
  }
}
