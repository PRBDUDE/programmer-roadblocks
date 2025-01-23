import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexTesterComponent } from './regex-tester.component';

describe('RegexTesterComponent', () => {
  let component: RegexTesterComponent;
  let fixture: ComponentFixture<RegexTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegexTesterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegexTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
