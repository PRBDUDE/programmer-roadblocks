import {Component, input, Input} from '@angular/core';
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

  protected readonly isProduction = isProduction;

  title = input<string>();
  /* eslint-disable-next-line @angular-eslint/no-input-rename */
  jsonValue = input<object>(undefined, {alias: 'json'});
  stringValue = input<string>();
  numberValue = input<number>();
  booleanValue = input<boolean>();
  regexValue = input<RegExp>();
  variableName = input<string>();
  flat = input<boolean>(false);

  debugOutputId = `debug_output_${uniqueId++}`;

  isJson(): boolean {
    return this.jsonValue !== undefined;
  }

  isString(): boolean {
    return this.stringValue() !== undefined;
  }

  isNumber(): boolean {
    return this.numberValue !== undefined;
  }

  isBoolean(): boolean {
    return this.booleanValue() !== undefined;
  }

  isRegex(): boolean {
    return this.regexValue !== undefined;
  }
}
