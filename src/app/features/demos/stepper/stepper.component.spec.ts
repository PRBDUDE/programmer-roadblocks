import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StepperComponent} from './stepper.component';
import {provideAnimations} from "@angular/platform-browser/animations";
import {By} from "@angular/platform-browser";

function clickNextButton(fixture: ComponentFixture<StepperComponent>) {
  const nextButtonEl = fixture.debugElement.query(By.css('.prb-next-button button'));
  expect(nextButtonEl).toBeTruthy();
  nextButtonEl.nativeElement.click();
  fixture.detectChanges();
}

function getStepNumber(fixture: ComponentFixture<StepperComponent>): string {
  const stepNumberEl = fixture.debugElement.query(By.css('.p-step-active .p-step-number'));
  return stepNumberEl.nativeElement.textContent.trim();
}

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StepperComponent
      ],
      providers: [
        provideAnimations()
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when the first step is active', () => {
    it('should have previous button falsy at initial state', () => {
      const prevButton = fixture.debugElement.query(By.css('.prb-previous-button button'));
      console.log('prevButton: ', prevButton);
    })

    it('should have next button truthy at initial state', () => {
      const nextButtonEl = fixture.debugElement.query(By.css('.prb-next-button button'));
      expect(nextButtonEl).toBeTruthy();
    })

    it('should have step number 1', () => {
      const stepNumber = getStepNumber(fixture);
      expect(stepNumber).toBe('1');
    })

    describe('when the second step is active', () => {
      beforeEach(() => {
        clickNextButton(fixture);
      })

      it('should have previous button truthy at initial state', () => {
        const prevButton = fixture.debugElement.query(By.css('.prb-previous-button button'));
        expect(prevButton).toBeTruthy();
      })

      it('should have next button truthy at initial state', () => {
        const nextButtonEl = fixture.debugElement.query(By.css('.prb-next-button button'));
        expect(nextButtonEl).toBeTruthy();
      })

      it('should have step number 2', () => {
        const stepNumber = getStepNumber(fixture);
        expect(stepNumber).toBe('2');
      })

      describe('when the third step is active', () => {
        beforeEach(() => {
          clickNextButton(fixture);
        })

        it('should have previous button truthy at initial state', () => {
          const prevButton = fixture.debugElement.query(By.css('.prb-previous-button button'));
          expect(prevButton).toBeTruthy();
        })

        it('should have next button truthy at initial state', () => {
          const nextButtonEl = fixture.debugElement.query(By.css('.prb-next-button button'));
          expect(nextButtonEl).toBeTruthy();
        })

        it('should have step number 3', () => {
          const stepNumber = getStepNumber(fixture);
          expect(stepNumber).toBe('3');
        })

        describe('when the fourth step is active', () => {
          beforeEach(() => {
            clickNextButton(fixture);
          })

          it('should have previous button truthy at initial state', () => {
            const prevButton = fixture.debugElement.query(By.css('.prb-previous-button button'));
            expect(prevButton).toBeTruthy();
          })

          it('should have next button falsy at initial state', () => {
            const nextButtonEl = fixture.debugElement.query(By.css('.prb-next-button button'));
            expect(nextButtonEl).toBeFalsy();
          })

          it('should have step number 4', () => {
            const stepNumber = getStepNumber(fixture);
            expect(stepNumber).toBe('4');
          })
        })
      })
    })
  })
});
