import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ScrollablePageComponent} from './scrollable-page.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideZonelessChangeDetection} from "@angular/core";

describe('ScrollablePageComponent', () => {
  let component: ScrollablePageComponent;
  let fixture: ComponentFixture<ScrollablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ScrollablePageComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollablePageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
