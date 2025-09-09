import {inject, Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {UserProfile} from "@model/user-profile";
import {environment} from "@environments/environment";
import {map, Observable, switchMap, take} from "rxjs";
import {setPrimaryColor} from "@utility/set-primary-color";
import {setSurfaceColor} from "@utility/set-surface-color";
import {PrimeNG} from "primeng/config";
import {setDarkTheme, setDebugMode, setFixedFooter} from "@utility/prb-mode";

export const DEFAULT_PROFILE: Readonly<UserProfile> = {
  primary: 'sky',
  surface: 'neutral',
  ripple: true,
  fixedFooter: true,
  debug: false,
  darkTheme: true
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends DataService<UserProfile> {

  primeng = inject(PrimeNG);

  constructor() {
    super(environment.userProfileUrl);
  }

  getProfile(): Observable<UserProfile> {
    return this.httpClient.get<UserProfile>(this.apiUrl);
  }

  updateUserProfile(profile: UserProfile): Observable<UserProfile> {
    console.log('Updating profile: ', profile);
    return this.httpClient.put<UserProfile>(this.apiUrl, profile);
  }

  // Apply a partial update by merging current profile with defaults and the patch.
  private updatePartial(patch: Partial<UserProfile>): Observable<UserProfile> {
    return this.getProfile().pipe(
      take(1),
      map(current => ({...DEFAULT_PROFILE, ...current, ...patch})),
      switchMap(updated => this.updateUserProfile(updated))
    );
  }

  setPalette(primary: string, surface: string, ripple: boolean): Observable<UserProfile> {
    return this.updatePartial({
      primary,
      surface,
      ripple: ripple
    });
  }

  setFixedFooterProfile(footer: boolean): Observable<UserProfile> {
    return this.updatePartial({fixedFooter: footer});
  }

  setDarkThemeProfile(theme: boolean): Observable<UserProfile> {
    return this.updatePartial({darkTheme: theme});
  }

  setDebugProfile(debug: boolean): Observable<UserProfile> {
    return this.updatePartial({debug: debug});
  }

  isChanged(): Observable<boolean> {
    return this.getProfile().pipe(
      map(current => {
        const currentProfile = {...DEFAULT_PROFILE, ...current};
        const defaultProfile = {...DEFAULT_PROFILE};
        return JSON.stringify(currentProfile) !== JSON.stringify(defaultProfile);
      })
    );
  }

  resetProfile(): Observable<UserProfile> {
    setPrimaryColor(DEFAULT_PROFILE.primary);
    setSurfaceColor(DEFAULT_PROFILE.surface);
    this.primeng.ripple.set(DEFAULT_PROFILE.ripple);
    setFixedFooter(DEFAULT_PROFILE.fixedFooter);
    setDarkTheme(DEFAULT_PROFILE.darkTheme);
    setDebugMode(DEFAULT_PROFILE.debug);
    return this.updateUserProfile({ ...DEFAULT_PROFILE });
  }
}
