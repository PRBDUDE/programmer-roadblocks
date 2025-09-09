import {TestBed, waitForAsync} from '@angular/core/testing';

import {ProfileService} from './profile.service';
import {provideHttpClient} from "@angular/common/http";
import {HttpTestingController, provideHttpClientTesting} from "@angular/common/http/testing";
import {UserProfile} from "@model/user-profile";

describe('ProfileService', () => {
  let service: ProfileService;
  let httpMock: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(ProfileService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getProfile', () => {
    it('should return a profile', () => {
      const mockProfile: UserProfile = {
        primary: 'sky',
        surface: 'stone',
        ripple: false,
        fixedFooter: false,
        debug: true,
        darkTheme: true
      };

      let received: UserProfile | undefined;

      service.getProfile().subscribe(p => (received = p));

      // Replace the URL string below with the actual endpoint used by your service.
      const req = httpMock.expectOne((request) => request.method === 'GET');
      expect(req.request.method).toBe('GET');

      req.flush(mockProfile);

      expect(received).toEqual(mockProfile);
    });
  });

  describe('setPalette', () => {
    // New tests for updating primary color to "teal"
    it('should update profile with primary color "teal"', () => {
      const currentProfile: UserProfile = {
        primary: 'sky',
        surface: 'neutral',
        ripple: true,
        fixedFooter: true,
        debug: false,
        darkTheme: true
      };

      // Act: request to set primary to "teal"
      let response: UserProfile | undefined;
      service.setPalette('teal', 'neutral', true).subscribe(res => (response = res));

      // Mock the GET of current profile used by updatePartial
      const getReq = httpMock.expectOne(req => req.method === 'GET');
      expect(getReq.request.method).toBe('GET');
      getReq.flush(currentProfile);

      // Expect a PUT with merged body where primary is "teal"
      const putReq = httpMock.expectOne(req => req.method === 'PUT');
      expect(putReq.request.method).toBe('PUT');

      const sentBody = putReq.request.body as UserProfile;
      expect(sentBody.primary).toBe('teal');
      expect(sentBody.surface).toBe('neutral');
      // Service converts boolean to string
      expect(sentBody.ripple).toBeTrue();

      // Complete the request by echoing back what server would return
      putReq.flush(sentBody);

      // Assert the observable emits the updated profile
      expect(response).toBeTruthy();
      expect(response?.primary).toBe('teal');
    });

    // New tests for updating surface color to "ocean"
    it('should update profile with surface color "ocean"', () => {
      const currentProfile: UserProfile = {
        primary: 'sky',
        surface: 'neutral',
        ripple: true,
        fixedFooter: true,
        debug: false,
        darkTheme: true
      };

      // Act: request to set surface to "ocean"
      let response: UserProfile | undefined;
      service.setPalette('sky', 'ocean', true).subscribe(res => (response = res));

      // Mock the GET of current surface used by updatePartial
      const getReq = httpMock.expectOne(req => req.method === 'GET');
      expect(getReq.request.method).toBe('GET');
      getReq.flush(currentProfile);

      // Expect a PUT with merged body where surface is "ocean"
      const putReq = httpMock.expectOne(req => req.method === 'PUT');
      expect(putReq.request.method).toBe('PUT');

      const sentBody = putReq.request.body as UserProfile;
      expect(sentBody.primary).toBe('sky');
      expect(sentBody.surface).toBe('ocean');
      // Service converts boolean to string
      expect(sentBody.ripple).toBeTrue();

      // Complete the request by echoing back what server would return
      putReq.flush(sentBody);

      // Assert the observable emits the updated profile
      expect(response).toBeTruthy();
      expect(response?.surface).toBe('ocean');
    });

    // New tests for updating Ripple Effect with "false"
    it('should update profile with Ripple Effect with "false"', () => {
      const currentProfile: UserProfile = {
        primary: 'sky',
        surface: 'neutral',
        ripple: true,
        fixedFooter: true,
        debug: false,
        darkTheme: false
      };

      // Act: request to set surface to "ocean"
      let response: UserProfile | undefined;
      service.setPalette('sky', 'neutral', false).subscribe(res => (response = res));

      // Mock the GET of current ripple effect used by updatePartial
      const getReq = httpMock.expectOne(req => req.method === 'GET');
      expect(getReq.request.method).toBe('GET');
      getReq.flush(currentProfile);

      // Expect a PUT with merged body where ripple effect is "false"
      const putReq = httpMock.expectOne(req => req.method === 'PUT');
      expect(putReq.request.method).toBe('PUT');

      const sentBody = putReq.request.body as UserProfile;
      expect(sentBody.primary).toBe('sky');
      expect(sentBody.surface).toBe('neutral');
      // Service converts boolean to string
      expect(sentBody.ripple).toBeFalse();

      // Complete the request by echoing back what server would return
      putReq.flush(sentBody);

      // Assert the observable emits the updated profile
      expect(response).toBeTruthy();
      expect(response?.ripple).toBeFalse();
    });
  });

  describe('setFooter', () => {
    it('should update profile with footer "float"', () => {
      const currentProfile: UserProfile = {
        primary: 'sky',
        surface: 'neutral',
        ripple: true,
        fixedFooter: true,
        debug: false,
        darkTheme: true
      };

      let response: UserProfile | undefined;
      service.setFixedFooterProfile(false).subscribe(res => (response = res));

      // First the service fetches current profile
      const getReq = httpMock.expectOne(req => req.method === 'GET');
      expect(getReq.request.method).toBe('GET');
      getReq.flush(currentProfile);

      // Then it sends the merged PUT with footer changed to "float"
      const putReq = httpMock.expectOne(req => req.method === 'PUT');
      expect(putReq.request.method).toBe('PUT');

      const sentBody = putReq.request.body as UserProfile;
      expect(sentBody.fixedFooter).toBeFalse();

      // Echo back the updated body as server response
      putReq.flush(sentBody);

      // Ensure observable emitted the updated profile
      expect(response).toBeTruthy();
      expect(response?.fixedFooter).toBeFalse();
    });
  });

  describe('setDebug', () => {
    it('should update profile with debug "true"', () => {
      const currentProfile: UserProfile = {
        primary: 'sky',
        surface: 'neutral',
        ripple: true,
        fixedFooter: true,
        debug: false,
        darkTheme: true
      };

      let response: UserProfile | undefined;
      service.setDebugProfile(true).subscribe(res => (response = res));

      // First, service fetches the current profile
      const getReq = httpMock.expectOne(req => req.method === 'GET');
      expect(getReq.request.method).toBe('GET');
      getReq.flush(currentProfile);

      // Then, it sends a PUT with debug converted to string "true"
      const putReq = httpMock.expectOne(req => req.method === 'PUT');
      expect(putReq.request.method).toBe('PUT');

      const sentBody = putReq.request.body as UserProfile;
      expect(sentBody.debug).toBeTrue();

      // Echo back the updated body as the server response
      putReq.flush(sentBody);

      // Ensure observable emitted the updated profile
      expect(response).toBeTruthy();
      expect(response?.debug).toBeTrue();
    });
  });

  describe('setTheme', () => {
    it('should update profile with theme "light"', () => {
      const currentProfile: UserProfile = {
        primary: 'sky',
        surface: 'neutral',
        ripple: true,
        fixedFooter: true,
        debug: false,
        darkTheme: false
      };

      let response: UserProfile | undefined;
      service.setDarkThemeProfile(false).subscribe(res => (response = res));

      // First, service fetches the current profile
      const getReq = httpMock.expectOne(req => req.method === 'GET');
      expect(getReq.request.method).toBe('GET');
      getReq.flush(currentProfile);

      // Then, it sends a PUT with theme changed to "light"
      const putReq = httpMock.expectOne(req => req.method === 'PUT');
      expect(putReq.request.method).toBe('PUT');

      const sentBody = putReq.request.body as UserProfile;
      expect(sentBody.darkTheme).toBeFalse();

      // Echo back the updated body as server response
      putReq.flush(sentBody);

      // Ensure observable emitted the updated profile
      expect(response).toBeTruthy();
      expect(response?.darkTheme).toBeFalse();
    });
  });
});
