import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainButtonComponent } from './plain-button.component';

describe('PlainButtonComponent', () => {
  let component: PlainButtonComponent;
  let fixture: ComponentFixture<PlainButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlainButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlainButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
