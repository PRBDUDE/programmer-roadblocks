import {Component, inject, OnInit} from '@angular/core';
import {MegaMenuModule} from "primeng/megamenu";
import {MegaMenuItem} from "primeng/api";
import {RouterLink} from "@angular/router";
import {Button} from "primeng/button";
import {Tooltip} from "primeng/tooltip";
import {isProduction} from "@utility/is-production";
import {NgOptimizedImage} from "@angular/common";
import {reactiveFormsMenu} from "@rootComponents/menu/reactive-forms-menu";
import {demosMenu} from "@rootComponents/menu/demos-menu";
import {documentationMenu} from "@rootComponents/menu/documentation-menu";
import {ColorPalettePickerComponent} from "@rootComponents/color-palette-picker/color-palette-picker.component";
import {isPrbMode, prbModes, setDarkTheme, setDebugMode, setFixedFooter, toggleMode} from "@utility/prb-mode";
import {ProfileService} from "@services/profile.service";

@Component({
  selector: 'prb-roadblock-header',
  imports: [
    MegaMenuModule,
    RouterLink,
    Button,
    Tooltip,
    NgOptimizedImage,
    ColorPalettePickerComponent
  ],
  templateUrl: './roadblock-header.component.html',
  styleUrl: './roadblock-header.component.scss'
})
export class RoadblockHeaderComponent implements OnInit {

  private profileService = inject(ProfileService);
  menuItems: MegaMenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
      reactiveFormsMenu(),
      demosMenu(),
      documentationMenu(),
    ]
  }

  isProductionEnvironment(): boolean {
    return isProduction();
  }

  toggleColorPicker() {
    toggleMode(prbModes.colorPicker);
    console.log('Color picker clicked');
  }

  isDarkTheme(): boolean {
    return isPrbMode(prbModes.dark);
  }

  darkTheme() {
    this.profileService.setDarkThemeProfile(true).subscribe(
      result => console.log('Dark theme set to: ', result)
    );
    setDarkTheme(true);
  }

  lightTheme() {
    this.profileService.setDarkThemeProfile(false).subscribe(
      result => console.log('Light theme set to: ', result)
    );
    setDarkTheme(false);
  }

  isDebug(): boolean {
    return isPrbMode(prbModes.debug);
  }

  setDebug(on: boolean) {
    this.profileService.setDebugProfile(on).subscribe(
      result => console.log('Debug mode set to: ', result)
    );
    setDebugMode(on);
  }

  isFixedFooter(): boolean {
    return isPrbMode(prbModes.fixedFooter);
  }

  fixed() {
    this.profileService.setFixedFooterProfile(true).subscribe(
      result => console.log('Fixed footer set to: ', result)
    );
    setFixedFooter(true);
  }

  floatng() {
    this.profileService.setFixedFooterProfile(false).subscribe(
      result => console.log('Floating footer set to: ', result)
    );
    setFixedFooter(false);
  }
}
