import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {provideNoopAnimations} from '@angular/platform-browser/animations';

import {StaticAccordionComponent} from './static-accordion.component';

describe('StaticAccordionComponent', () => {
  let component: StaticAccordionComponent;
  let fixture: ComponentFixture<StaticAccordionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StaticAccordionComponent
      ],
      providers: [
        provideNoopAnimations()
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
