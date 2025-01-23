import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollablePageComponent } from './scrollable-page.component';

describe('ScrollablePageComponent', () => {
  let component: ScrollablePageComponent;
  let fixture: ComponentFixture<ScrollablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollablePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
