import {TestBed} from '@angular/core/testing';
import {Preset, PrimengConfigService} from './primeng-config.service';
import {PRIME_NG_CONFIG} from "primeng/config";

describe('PrimengConfigService', () => {
  let service: PrimengConfigService;
  let theme: Preset;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: PRIME_NG_CONFIG,
          useValue: {
            theme: {
              preset: {
                primitive: {},
                semantic: {
                  colorScheme: {
                    dark: { surface: {} },
                    light: { surface: {} }
                  },
                  primary: {}
                }
              }
            }
          }
        }
      ]
    });
    service = TestBed.inject(PrimengConfigService);
    theme = (TestBed.inject(PRIME_NG_CONFIG)).theme as Preset;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
