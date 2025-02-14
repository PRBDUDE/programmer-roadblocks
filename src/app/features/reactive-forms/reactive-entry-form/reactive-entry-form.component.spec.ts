import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveEntryFormComponent } from './reactive-entry-form.component';

describe('ReactiveEntryFormComponent', () => {
  let component: ReactiveEntryFormComponent;
  let fixture: ComponentFixture<ReactiveEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveEntryFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
