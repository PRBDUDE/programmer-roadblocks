import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StepsComponent} from './steps.component';
import {ActivatedRoute, convertToParamMap} from "@angular/router";
import {By} from "@angular/platform-browser";
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideZonelessChangeDetection} from "@angular/core";

describe('StepsComponent', () => {
  let component: StepsComponent;
  let fixture: ComponentFixture<StepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StepsComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({id: 123})
            }
          }
        },
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StepsComponent);
    component = fixture.componentInstance;
    component.activeIndex = 0;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const nextButton = fixture.debugElement.query(By.css('.prb-next-button p-button'));
    expect(nextButton).toBeTruthy();
    const previousButton = fixture.debugElement.query(By.css('.prb-previous-button p-button'));
    expect(previousButton).toBeFalsy();
  });

  it('should move to next step', () => {
    expect(component.activeIndex).toBe(0);
    component.next();
    expect(component.activeIndex).toBe(1);
  });

  it('should move to previous step', async () => {
    component.activeIndex = 1;
    await fixture.whenStable();
    expect(component.activeIndex).toBe(1);
    component.prev();
    await fixture.whenStable();
    expect(component.activeIndex).toBe(0);
  })

  it('should hide next button on last step', async () => {
    component.activeIndex = 3;
    await fixture.whenStable();
    expect(component.activeIndex).toBe(3);
  });
});
