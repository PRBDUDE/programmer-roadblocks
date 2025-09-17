import {Component, input} from '@angular/core';
import {Indentation} from "@utility/indentation";

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
    return Indentation.get(this.level(), extra);
  }
}
