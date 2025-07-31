import {inject, Injectable} from '@angular/core';
import {PRIME_NG_CONFIG, PrimeNGConfigType} from "primeng/config";

export interface Preset {
  preset: {
    primitive: {
      [key: string]: {
        [key: number]: string
      }
    }
    semantic: {
      colorScheme: {
        dark: {
          surface: {
            [key: number]: string
          }
        },
        light: {
          surface: {
            [key: number]: string
          }
        }
      }
      primary: {
        [key: number]: string
      }
    }
  }
}

export interface PrbTint {
  [key: string]: {
    [key: number]: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PrimengConfigService {

  theme = (inject(PRIME_NG_CONFIG) as PrimeNGConfigType).theme as Preset;

  getPalette(): PrbTint {
    const {borderRadius, ...colorOnly} = (this.theme as Preset).preset.primitive;
    return colorOnly;
  }

  getSurfaceColor(theme: 'dark' | 'light'): PrbTint {
    return (this.theme as Preset).preset.semantic.colorScheme[theme].surface;
  }

  getPrimaryColor(): PrbTint {
    return (this.theme as Preset).preset.semantic.primary;
  }
}
