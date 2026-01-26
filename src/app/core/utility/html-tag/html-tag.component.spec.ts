import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlTagComponent} from './html-tag.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('HtmlTagComponent', () => {
  let component: HtmlTagComponent;
  let fixture: ComponentFixture<HtmlTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HtmlTagComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HtmlTagComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
