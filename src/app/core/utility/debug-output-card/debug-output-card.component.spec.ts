import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {DebugOutputCardComponent} from './debug-output-card.component';

describe('DebugOutputCardComponent', () => {
  let component: DebugOutputCardComponent;
  let fixture: ComponentFixture<DebugOutputCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DebugOutputCardComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugOutputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
