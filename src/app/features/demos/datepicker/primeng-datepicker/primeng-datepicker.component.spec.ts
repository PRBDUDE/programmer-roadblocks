import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengDatepickerComponent } from './primeng-datepicker.component';

describe('PrimengDatepickerComponent', () => {
  let component: PrimengDatepickerComponent;
  let fixture: ComponentFixture<PrimengDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengDatepickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengDatepickerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
