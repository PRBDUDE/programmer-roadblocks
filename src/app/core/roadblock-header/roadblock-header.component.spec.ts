import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RoadblockHeaderComponent} from './roadblock-header.component';
import {provideRouter} from "@angular/router";
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('RoadblockHeaderComponent', () => {
  let component: RoadblockHeaderComponent;
  let fixture: ComponentFixture<RoadblockHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RoadblockHeaderComponent
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RoadblockHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
