import {Component, input} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {isProduction} from "@utility/is-production";

let uniqueId = 0;

@Component({
  selector: 'prb-debug-output-card',
  imports: [
    JsonPipe
  ],
  templateUrl: './debug-output-card.component.html',
  styleUrl: './debug-output-card.component.scss'
})
export class DebugOutputCardComponent {

  protected readonly isProduction = isProduction;

  title = input<string>();
  jsonValue = input<object | undefined>(undefined, {alias: 'json'});
  stringValue = input<string | undefined>();
  numberValue = input<number | undefined>();
  booleanValue = input<boolean | undefined>();
  regexValue = input<RegExp | undefined>();
  variableName = input<string | undefined>();
  flat = input<boolean>(false);

  debugOutputId = `debug_output_${uniqueId++}`;

  isJson(): boolean {
    return this.jsonValue() !== undefined;
  }

  isString(): boolean {
    return this.stringValue() !== undefined;
  }

  isNumber(): boolean {
    return this.numberValue() !== undefined;
  }

  isBoolean(): boolean {
    return this.booleanValue() !== undefined;
  }

  isRegex(): boolean {
    return this.regexValue() !== undefined;
  }
}
