import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCardComponent } from './button-card.component';

describe('ButtonCardComponent', () => {
  let component: ButtonCardComponent;
  let fixture: ComponentFixture<ButtonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
