import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {providePrimeNG} from "primeng/config";
import {AuraPreset} from "./themes/aura/theme";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: AuraPreset,
        options: {
          darkModeSelector: '.prb-dark-theme'
        }
      },
      ripple: true
    })
  ]
};
