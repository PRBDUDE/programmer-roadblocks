import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {UserProfile} from "@model/user-profile";
import {environment} from "@environments/environment";
import { Observable, map, switchMap, take } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends DataService<UserProfile> {

  private readonly DEFAULT_PROFILE: UserProfile = {
    primary: 'sky',
    surface: 'neutral',
    ripple: 'true',
    footer: 'sticky',
    debug: 'false',
    theme: 'dark'
  };

  constructor() {
    super(environment.userProfileUrl);
  }

  getProfile(): Observable<UserProfile> {
    return this.httpClient.get<UserProfile>(this.apiUrl);
  }

  updateProfile(item: UserProfile): Observable<UserProfile> {
    return this.httpClient.put<UserProfile>(this.apiUrl, item);
  }

  // Apply a partial update by merging current profile with defaults and the patch.
  private updatePartial(patch: Partial<UserProfile>): Observable<UserProfile> {
    return this.getProfile().pipe(
      take(1),
      map(current => ({ ...this.DEFAULT_PROFILE, ...current, ...patch })),
      switchMap(updated => this.updateProfile(updated))
    );
  }

  setPalette(primary: string, surface: string, ripple: boolean): Observable<UserProfile> {
    return this.updatePartial({
      primary,
      surface,
      ripple: ripple.toString()
    });
  }

  setFooter(footer: string): Observable<UserProfile> {
    return this.updatePartial({ footer });
  }

  setTheme(theme: string): Observable<UserProfile> {
    return this.updatePartial({ theme });
  }

  setDebug(debug: boolean): Observable<UserProfile> {
    return this.updatePartial({ debug: debug.toString() });
  }

  resetProfile(): Observable<UserProfile> {
    return this.updateProfile(this.DEFAULT_PROFILE);
  }
}
