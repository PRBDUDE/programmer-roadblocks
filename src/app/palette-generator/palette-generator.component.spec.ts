import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PaletteGeneratorComponent} from './palette-generator.component';

describe('PalateGeneratorComponent', () => {
  let component: PaletteGeneratorComponent;
  let fixture: ComponentFixture<PaletteGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaletteGeneratorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PaletteGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
