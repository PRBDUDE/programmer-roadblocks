import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RoadblockHeaderComponent} from "@header/roadblock-header.component";
import {PrimeNG} from "primeng/config";
import {RoadblockFooterComponent} from "@footer/roadblock-footer.component";
import {PrimengConfigService} from "@utility/primeng-config.service";
import {ProfileService} from "@services/profile.service";
import {setPrimaryColor} from "@utility/set-primary-color";
import {setSurfaceColor} from "@utility/set-surface-color";
import {setDarkTheme, setDebugMode, setFixedFooter} from "@utility/prb-mode";

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
  private profileService = inject(ProfileService);
  primengConfig = inject(PrimengConfigService);

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(profile => {
      setPrimaryColor(profile.primary);
      setSurfaceColor(profile.surface);
      this.primeng.ripple.set(profile.ripple);
      setFixedFooter(profile.fixedFooter);
      setDarkTheme(profile.darkTheme);
      setDebugMode(profile.debug);
    })
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
    // console.log('Theme - Color Palette: ',
    //   this.primengConfig.getPalette());
    // console.log('Theme - Primary Color: ',
    //   this.primengConfig.getPrimaryColor());
    // console.log('Theme - Semantic: ',
    //   AuraPreset.semantic);
    // console.log('Theme - Components: ',
    //   AuraPreset.components);
    // console.log('components\naccordion: ',
    //   AuraPreset?.components?.accordion);
    // console.log('components\nbutton: ' +
    //   JSON.stringify(
    //     AuraPreset.components.button,
    //     undefined, 2));
  }
}
