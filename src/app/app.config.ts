import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {providePrimeNG} from "primeng/config";
import {CyanAuraPreset} from "./themes/cyan-aura-theme";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: CyanAuraPreset,
        options: {
          darkModeSelector: '.prb-dark-theme'
        }
      },
      ripple: true
    })
  ]
};
