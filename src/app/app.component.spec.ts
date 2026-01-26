import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {provideRouter} from "@angular/router";
import {PRIME_NG_CONFIG} from 'primeng/config';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        {
          provide: PRIME_NG_CONFIG,
          useValue: {
            ripple: false,
            theme: {
              preset: {
                primitive: {},
                semantic: {
                  colorScheme: {
                    dark: {surface: {}},
                    light: {surface: {}}
                  },
                  primary: {}
                }
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'programmer-roadblocks' title`, () => {
    expect(component.title).toEqual('programmer-roadblocks');
  });
});
