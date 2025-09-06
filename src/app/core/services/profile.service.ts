import {inject, Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {UserProfile} from "@model/user-profile";
import {environment} from "@environments/environment";
import {map, Observable, switchMap, take} from "rxjs";
import {setPrimaryColor} from "@utility/set-primary-color";
import {setSurfaceColor} from "@utility/set-surface-color";
import {PrimeNG} from "primeng/config";
import {setDarkTheme, setDebugMode, setFixedFooter} from "@utility/prb-mode";

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends DataService<UserProfile> {

  private readonly DEFAULT_PROFILE: UserProfile = {
    id: 1,
    primary: 'sky',
    surface: 'neutral',
    ripple: true,
    fixedFooter: true,
    debug: false,
    darkTheme: true
  };

  primeng = inject(PrimeNG);

  constructor() {
    super(environment.userProfileUrl);
  }

  getProfile(): Observable<UserProfile> {
    return this.httpClient.get<UserProfile>(this.apiUrl);
  }

  // Apply a partial update by merging current profile with defaults and the patch.
  private updatePartial(patch: Partial<UserProfile>): Observable<UserProfile> {
    return this.getProfile().pipe(
      take(1),
      map(current => ({...this.DEFAULT_PROFILE, ...current, ...patch})),
      switchMap(updated => this.update(1, updated))
    );
  }

  setPalette(primary: string, surface: string, ripple: boolean): Observable<UserProfile> {
    return this.updatePartial({
      primary,
      surface,
      ripple: ripple
    });
  }

  setFixedFooter(footer: boolean): Observable<UserProfile> {
    return this.updatePartial({fixedFooter: footer});
  }

  setDarkTheme(theme: boolean): Observable<UserProfile> {
    return this.updatePartial({darkTheme: theme});
  }

  setDebug(debug: boolean): Observable<UserProfile> {
    return this.updatePartial({debug: debug});
  }

  resetProfile(): Observable<UserProfile> {
    setPrimaryColor(this.DEFAULT_PROFILE.primary);
    setSurfaceColor(this.DEFAULT_PROFILE.surface);
    this.primeng.ripple.set(this.DEFAULT_PROFILE.ripple);
    setFixedFooter(this.DEFAULT_PROFILE.fixedFooter);
    setDarkTheme(this.DEFAULT_PROFILE.darkTheme);
    setDebugMode(this.DEFAULT_PROFILE.debug);
    return this.update(1, this.DEFAULT_PROFILE);
  }
}
