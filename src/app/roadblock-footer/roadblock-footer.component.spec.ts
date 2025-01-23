import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadblockFooterComponent } from './roadblock-footer.component';

describe('RoadblockFooterComponent', () => {
  let component: RoadblockFooterComponent;
  let fixture: ComponentFixture<RoadblockFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadblockFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoadblockFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
