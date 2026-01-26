import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RoadblockFooterComponent} from './roadblock-footer.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('RoadblockFooterComponent', () => {
  let component: RoadblockFooterComponent;
  let fixture: ComponentFixture<RoadblockFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RoadblockFooterComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RoadblockFooterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
