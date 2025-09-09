import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Tooltip} from "primeng/tooltip";
import {$dt} from "@primeuix/themes";
import {NgClass} from "@angular/common";
import {isPrbMode, prbModes} from "@utility/prb-mode";
import {ToggleSwitch} from "primeng/toggleswitch";
import {PrimeNG} from "primeng/config";
import {ProfileService} from "@services/profile.service";
import {UserProfile} from "@model/user-profile";
import {setSurfaceColor} from "@utility/set-surface-color";
import {Button} from "primeng/button";
import {take} from "rxjs";
import {setPrimaryColor} from "@utility/set-primary-color";

@Component({
  selector: 'prb-color-palette',
  imports: [
    FormsModule,
    Tooltip,
    NgClass,
    ToggleSwitch,
    Button
  ],
  templateUrl: './color-palette-picker.component.html',
  styleUrl: './color-palette-picker.component.scss'
})
export class ColorPalettePickerComponent implements OnInit, OnDestroy {
  profile: UserProfile = {
    primary: 'sky',
    surface: 'neutral',
    ripple: true,
    fixedFooter: true,
    debug: true,
    darkTheme: true
  };

  primeng = inject(PrimeNG);
  private profileService = inject(ProfileService)
  private isChangedFlag = false;
  private refreshIntervalId?: number;
  private readonly intervalTime = 5000;


  ngOnInit() {
    this.profileService.getProfile().subscribe(profile => {
      this.profile.primary = profile.primary;
      this.profile.surface = profile.surface;
      this.profile.ripple = profile.ripple;
      console.log('Loaded profile: ',
        this.profile)
    });
    this.refreshIsChanged();
    this.refreshIntervalId = window.setInterval(() => this.refreshIsChanged(), this.intervalTime);
  }

  ngOnDestroy(): void {
    if (this.refreshIntervalId != null
    ) {
      window.clearInterval(this.refreshIntervalId);
      this.refreshIntervalId = undefined;
    }
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

  isShowColorPalette(): boolean {
    return isPrbMode(prbModes.colorPicker);
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
    this.profileService.setPalette(
      this.profile.primary,
      this.profile.surface,
      this.profile.ripple).subscribe(result => {
      console.log('Updated palette to: ', result)
      this.refreshIsChanged();
    });
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
    this.profile.ripple = rippleState;
    this.updatePalette();
  }

  isRippleEffect() {
    return this.primeng.ripple();
  }

  resetAll() {
    this.profileService.resetProfile().subscribe(result => {
      console.log('Reset to default profile: ', result);
      this.refreshIsChanged();
    });
  }

  private refreshIsChanged(): void {
    this.profileService.isChanged().pipe(take(1)).subscribe(v => this.isChangedFlag = v);
  }

  isProfileChanged(): boolean {
    return this.isChangedFlag;
  }
}
