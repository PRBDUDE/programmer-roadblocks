import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SocialMediaLinksComponent} from './social-media-links.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideZonelessChangeDetection} from "@angular/core";

describe('SocialMediaLinksComponent', () => {
  let component: SocialMediaLinksComponent;
  let fixture: ComponentFixture<SocialMediaLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SocialMediaLinksComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialMediaLinksComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
