import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDatepickerComponent } from './basic-datepicker.component';

describe('BasicDatepickerComponent', () => {
  let component: BasicDatepickerComponent;
  let fixture: ComponentFixture<BasicDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicDatepickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicDatepickerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
