import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InputErrorComponent} from './input-error.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideZonelessChangeDetection} from "@angular/core";

describe('InputErrorComponent', () => {
  let component: InputErrorComponent;
  let fixture: ComponentFixture<InputErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InputErrorComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InputErrorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
