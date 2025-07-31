import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RoadblockHeaderComponent} from "@rootComponents/roadblock-header.component";
import {PrimeNG} from "primeng/config";
import {RoadblockFooterComponent} from "@rootComponents/roadblock-footer.component";
import {AuraPreset} from "./themes/aura-theme";
import Aura from "@primeng/themes/aura";
import Lara from "@primeng/themes/lara";
import Material from "@primeng/themes/material";
import Nora from "@primeng/themes/nora";
import {PrimengConfigService} from "@utility/primeng-config.service";

@Component({
  selector: 'prb-root',
  imports: [
    RouterOutlet,
    RoadblockHeaderComponent,
    RoadblockFooterComponent,
    RoadblockHeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'programmer-roadblocks';
  primeng = inject(PrimeNG);
  primengConfig = inject(PrimengConfigService);

  ngOnInit(): void {
    this.primeng.ripple.set(true);
    this.primeng.zIndex = {
      modal: 10000,
      overlay: 10000,
      menu: 10000,
      tooltip: 10000
    }
    this.primeng.filterMatchModeOptions = {
      text: ['contains', 'notcontains', 'equals', 'notequals', 'in', 'notin'],
      numeric: ['equals', 'notequals', 'lt', 'lte', 'gt', 'gte', 'in', 'notin'],
      date: ['equals', 'notequals', 'before', 'after', 'between', 'notbetween']
    };

    // console.log('Unmodified Theme - Aura: ',
    //   Aura);
    // console.log('Unmodified Theme - Lara: ',
    //   Lara);
    // console.log('Unmodified Theme - Material: ',
    //   Material);
    // console.log('Unmodified Theme - Nora: ',
    //   Nora);
    console.log('Theme - Color Palette: ',
      this.primengConfig.getPalette());
    console.log('Theme - Primary Color: ',
      this.primengConfig.getPrimaryColor());
    console.log('Theme - Semantic: ',
      AuraPreset.semantic);
    console.log('Theme - Components: ',
      AuraPreset.components);
    // console.log('components\nbutton: ' +
    //   JSON.stringify(
    //     AuraPreset.components.button,
    //     undefined, 2));
  }
}
