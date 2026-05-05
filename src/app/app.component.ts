import {AfterViewInit, ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RoadblockHeaderComponent} from "@header/roadblock-header.component";
import {PrimeNG} from "primeng/config";
import {RoadblockFooterComponent} from "@footer/roadblock-footer.component";
import {ProfileService} from "@services/profile.service";
import {setDarkTheme, setDebugMode, setFixedFooter} from "@utility/prb-mode";
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
export class AppComponent implements OnInit, AfterViewInit {
  title = 'programmer-roadblocks';
  primeng = inject(PrimeNG);
  private profileService = inject(ProfileService);

  primengConfig = inject(PrimengConfigService);

  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(profile => {
      // setPrimaryColor(profile.primary);
      // setSurfaceColor(profile.surface);
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

    // console.log('Unmodified Theme - Aura: ', Aura);
    // console.log('Unmodified Theme - Lara: ', Lara);
    // console.log('Unmodified Theme - Nora: ', Nora);
    // console.log('Theme - Color Palette: ',
    //   this.primengConfig.getPalette());
    // console.log('Theme - Primary Color: ',
    //   this.primengConfig.getPrimaryColor());
    // console.log('Theme - Surface Color (dark): ',
    //   this.primengConfig.getSurfaceColor('dark'));
    // console.log('Theme - Primitive: ',
    //   Prb0Preset.primitive);
    // console.log('Theme - Semantic: ',
    //   Prb0Preset.semantic);
    // console.log('Theme - css: ',
    //   Prb0Preset.css);
    // console.log('Theme - Components: ',
    //   Prb0Preset.components);
    // console.log('components\naccordion: ',
    //   JSON.stringify(Prb0Preset?.components?.accordion,
    //     undefined, 2));
    // console.log('PRB1:components\naccordion: ',
    //   JSON.stringify(Prb1Preset?.components?.accordion,
    //     undefined, 2));
    // console.log('components\nbutton.colorScheme: ',
    //   JSON.stringify(
    //     Prb0Preset?.components?.button?.colorScheme,
    //     undefined, 2));
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
}
