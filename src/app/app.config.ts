import {ApplicationConfig, provideZonelessChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {providePrimeNG} from "primeng/config";
import {provideAnimations} from "@angular/platform-browser/animations";
import {AuraPreset} from "./themes/aura/theme";
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
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
