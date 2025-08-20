import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionOptionsComponent } from './accordion-options.component';

describe('AccordionOptionsComponent', () => {
  let component: AccordionOptionsComponent;
  let fixture: ComponentFixture<AccordionOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
