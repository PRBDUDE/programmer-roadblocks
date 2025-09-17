import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlTagComponent } from './html-tag.component';

describe('HtmlTagComponent', () => {
  let component: HtmlTagComponent;
  let fixture: ComponentFixture<HtmlTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
