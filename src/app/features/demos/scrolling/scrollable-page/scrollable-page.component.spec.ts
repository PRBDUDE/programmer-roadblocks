import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ScrollablePageComponent} from './scrollable-page.component';

describe('ScrollablePageComponent', () => {
  let component: ScrollablePageComponent;
  let fixture: ComponentFixture<ScrollablePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ScrollablePageComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
