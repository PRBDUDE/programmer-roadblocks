import {Component, Input} from '@angular/core';
import {JsonPipe, NgClass} from "@angular/common";
import {isProduction} from "@utility/is-production";

let uniqueId = 0;

@Component({
  selector: 'prb-debug-output-card',
  imports: [
    JsonPipe,
    NgClass
  ],
  templateUrl: './debug-output-card.component.html',
  styleUrl: './debug-output-card.component.scss'
})
export class DebugOutputCardComponent {
  @Input() title: string = '';
  /* eslint-disable-next-line @angular-eslint/no-input-rename */
  @Input('json') jsonValue!: object;
  @Input() stringValue!: string;
  @Input() numberValue!: number;
  @Input() booleanValue!: boolean;
  @Input() regexValue!: RegExp;
  @Input() variableName: string = '';
  @Input() flat: boolean = false;

  debugOutputId = `debug_output_${uniqueId++}`;

  isJson(): boolean {
    return this.jsonValue !== undefined;
  }

  isString(): boolean {
    return this.stringValue !== undefined;
  }

  isNumber(): boolean {
    return this.numberValue !== undefined;
  }

  isBoolean(): boolean {
    return this.booleanValue !== undefined;
  }

  isRegex(): boolean {
    return this.regexValue !== undefined;
  }

  protected readonly isProduction = isProduction;
}
