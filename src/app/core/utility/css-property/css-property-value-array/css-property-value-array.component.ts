import {Component, input} from '@angular/core';

@Component({
  selector: 'prb-css-property-value-array',
  imports: [],
  templateUrl: './css-property-value-array.component.html',
  styleUrl: './css-property-value-array.component.scss'
})
export class CssPropertyValueArrayComponent {
  [x: string]: any;
  level = input<number>(0);
  values = input<string[]>([]);

  getIndentation(extra: number = 0) {
    const count = this.level() + extra;
    return '\u00A0'.repeat(count * 4);
  }
}
