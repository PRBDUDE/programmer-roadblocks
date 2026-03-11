import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpButtonComponent } from './help-button.component';

describe('HelpButtonComponent', () => {
  let component: HelpButtonComponent;
  let fixture: ComponentFixture<HelpButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
