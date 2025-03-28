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

@Component({
  selector: 'prb-roadblock-header',
  imports: [
    MegaMenuModule,
    RouterLink,
    Button,
    Tooltip,
    NgOptimizedImage
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
    element?.classList.toggle('dark-theme');
  }

  isDarkMode() {
    const element = document.querySelector('html');
    return element?.classList.contains('dark-theme');
  }

  toggleDebugMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('debug-mode');
  }
}
