import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugOutputCardComponent } from './debug-output-card.component';

describe('DebugOutputCardComponent', () => {
  let component: DebugOutputCardComponent;
  let fixture: ComponentFixture<DebugOutputCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebugOutputCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebugOutputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
