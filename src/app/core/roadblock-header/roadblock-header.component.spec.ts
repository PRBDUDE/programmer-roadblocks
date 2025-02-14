import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadblockHeaderComponent } from './roadblock-header.component';
import {provideRouter} from "@angular/router";

describe('RoadblockHeaderComponent', () => {
  let component: RoadblockHeaderComponent;
  let fixture: ComponentFixture<RoadblockHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RoadblockHeaderComponent
      ],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RoadblockHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
