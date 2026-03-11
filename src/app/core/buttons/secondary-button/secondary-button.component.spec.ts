import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryButtonComponent } from './secondary-button.component';

describe('SecondaryButtonComponent', () => {
  let component: SecondaryButtonComponent;
  let fixture: ComponentFixture<SecondaryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
