import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessButtonComponent } from './success-button.component';

describe('SuccessButtonComponent', () => {
  let component: SuccessButtonComponent;
  let fixture: ComponentFixture<SuccessButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
