import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrastButtonComponent } from './contrast-button.component';

describe('ContrastButtonComponent', () => {
  let component: ContrastButtonComponent;
  let fixture: ComponentFixture<ContrastButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContrastButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContrastButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
