import {Component, OnInit} from '@angular/core';
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
import {isMode, prbModes, toggleMode} from "@utility/is-mode";

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
  protected readonly isProduction = isProduction;

  menuItems: MegaMenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
      reactiveFormsMenu(),
      demosMenu(),
      documentationMenu(),
    ]
  }

  protected readonly isMode = isMode;
  protected readonly prbModes = prbModes;
  protected readonly toggleMode = toggleMode;
}
