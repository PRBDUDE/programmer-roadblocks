import {Component, OnInit} from '@angular/core';
import {MegaMenuModule} from "primeng/megamenu";
import {MegaMenuItem} from "primeng/api";
import {RouterLink} from "@angular/router";
import {Button} from "primeng/button";
import {isDebugMode} from "@utility/is-debug-mode";
import {Tooltip} from "primeng/tooltip";
import {isProduction} from "@utility/is-production";
import {NgOptimizedImage} from "@angular/common";
import {reactiveFormsMenu} from "@rootComponents/menu/reactive-forms-menu";
import {demosMenu} from "@rootComponents/menu/demos-menu";
import {documentationMenu} from "@rootComponents/menu/documentation-menu";
import {ColorPalettePickerComponent} from "@rootComponents/color-palette-picker/color-palette-picker.component";
import {isDarkMode} from "@utility/is-dark-mode";

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
  protected readonly isDebugMode = isDebugMode;
  protected readonly isProduction = isProduction;

  menuItems: MegaMenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
      reactiveFormsMenu(),
      demosMenu(),
      documentationMenu(),
    ]
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('prb-dark-theme');
  }

  toggleDebugMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('prb-debug-mode');
  }

  toggleColorPicker() {
    const element = document.querySelector('.prb-color-palette-panel');
    element?.classList.toggle('prb-show');
  }

  protected readonly isDarkMode = isDarkMode;
}
