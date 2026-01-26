import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ScrollablePageComponent} from './scrollable-page.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

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
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
