import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StepsComponent} from './steps.component';
import {ActivatedRoute, convertToParamMap} from "@angular/router";
import {By} from "@angular/platform-browser";

describe('StepsComponent', () => {
  let component: StepsComponent;
  let fixture: ComponentFixture<StepsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
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
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsComponent);
    component = fixture.componentInstance;
    component.activeIndex = 0;
    fixture.detectChanges();
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

  it('should move to previous step', () => {
    component.activeIndex = 1;
    fixture.detectChanges();
    expect(component.activeIndex).toBe(1);
    component.prev();
    expect(component.activeIndex).toBe(0);
  })

  it('should hide next button on last step', () => {
    component.activeIndex = 3;
    fixture.detectChanges();
    const nextButton = fixture.debugElement.query(By.css('.prb-next-button p-button'));
    expect(nextButton).toBeFalsy();
  });
});
