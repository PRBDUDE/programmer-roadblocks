import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {RoadblockFooterComponent} from './roadblock-footer.component';

describe('RoadblockFooterComponent', () => {
  let component: RoadblockFooterComponent;
  let fixture: ComponentFixture<RoadblockFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RoadblockFooterComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadblockFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
