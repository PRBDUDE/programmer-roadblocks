import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactiveEntryFormComponent} from './reactive-entry-form.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideZonelessChangeDetection} from "@angular/core";

describe('ReactiveEntryFormComponent', () => {
  let component: ReactiveEntryFormComponent;
  let fixture: ComponentFixture<ReactiveEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveEntryFormComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveEntryFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
