import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationButtonComponent } from './information-button.component';

describe('InformationButtonComponent', () => {
  let component: InformationButtonComponent;
  let fixture: ComponentFixture<InformationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
