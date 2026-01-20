import {Component, inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {InputNumberInputEvent, InputNumberModule} from 'primeng/inputnumber';
import {ColorDefinition} from '@model/color-definition';
import {generateColorPalettes} from '@utility/generate-color-palettes';

@Component({
  selector: 'prb-palette-generator',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    CardModule,
    InputNumberModule
],
  templateUrl: './palette-generator.component.html',
  styleUrl: './palette-generator.component.scss'
})
export class PaletteGeneratorComponent implements OnInit {
  fb = inject(FormBuilder);

  colorForm!: FormGroup;
  colorCount = 1;
  generatedPalettes: Record<string, Record<string, string>> = {};
  paletteKeys: string[] = [];
  shadeKeys: string[] = [];

  ngOnInit() {
    this.colorForm = this.fb.group({
      colors: this.fb.array([this.createColorControl()])
    });
  }

  get colorsArray(): FormArray {
    return this.colorForm.get('colors') as FormArray;
  }

  createColorControl(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      baseColor: ['#14b8a6', [Validators.required, Validators.pattern(/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/)]]
    });
  }

  updateColorCount($event: InputNumberInputEvent): void {
    if (!$event.value) {
      return;
    }
    const count = $event.value as number;
    this.colorCount = count;
    const currentLength = this.colorsArray.length;

    if (count > currentLength) {
      for (let i = currentLength; i < count; i++) {
        this.colorsArray.push(this.createColorControl());
      }
    } else if (count < currentLength) {
      for (let i = currentLength - 1; i >= count; i--) {
        this.colorsArray.removeAt(i);
      }
    }
  }

  generatePalettes(): void {
    if (this.colorForm.valid) {
      const colorDefinitions: ColorDefinition[] = this.colorsArray.value;
      this.generatedPalettes = generateColorPalettes(colorDefinitions);
      this.paletteKeys = Object.keys(this.generatedPalettes);

      if (this.paletteKeys.length > 0) {
        this.shadeKeys = Object.keys(this.generatedPalettes[this.paletteKeys[0]]);
      }
    }
  }

  getColorValue(paletteName: string, shade: string): string {
    return this.generatedPalettes[paletteName][shade];
  }

  onColorPickerChange(event: Event, index: number): void {
    const colorValue = (event.target as HTMLInputElement).value;
    const textInput = document.getElementById('colorHex' + index) as HTMLInputElement;
    if (textInput && textInput.value !== colorValue) {
      textInput.value = colorValue;
    }
  }

  onColorTextChange(event: Event, index: number): void {
    let colorValue = (event.target as HTMLInputElement).value;
    const textInput = event.target as HTMLInputElement;

    if (!colorValue) {
      return;
    }

    if (!colorValue.startsWith('#')) {
      colorValue = '#' + colorValue;
      textInput.value = colorValue;
    }

    const isValidHex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(colorValue);

    if (isValidHex) {
      // Convert 3-digit hex to 6-digit if needed
      if (colorValue.length === 4) {
        const r = colorValue[1];
        const g = colorValue[2];
        const b = colorValue[3];
        colorValue = `#${r}${r}${g}${g}${b}${b}`;
        textInput.value = colorValue;
      }

      const colorPicker = document.getElementById('colorPicker' + index) as HTMLInputElement;
      if (colorPicker) {
        colorPicker.value = colorValue;
      }
    }
  }
}
