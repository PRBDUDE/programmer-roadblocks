import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {RoadblockHeaderComponent} from './roadblock-header.component';
import {provideRouter} from "@angular/router";

describe('RoadblockHeaderComponent', () => {
  let component: RoadblockHeaderComponent;
  let fixture: ComponentFixture<RoadblockHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RoadblockHeaderComponent
      ],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadblockHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
