import {Component, Input} from '@angular/core';
import {JsonPipe, NgClass} from "@angular/common";
import {isProduction} from "@utility/is-production";

let uniqueId = 0;

@Component({
  selector: 'app-debug-output-card',
  imports: [
    JsonPipe,
    NgClass
  ],
  templateUrl: './debug-output-card.component.html',
  styleUrl: './debug-output-card.component.scss'
})
export class DebugOutputCardComponent {
  @Input('title') title: string = '';
  @Input('json') jsonValue!: object;
  @Input('string') stringValue!: string;
  @Input('number') numberValue!: number;
  @Input('boolean') booleanValue!: boolean;
  @Input('regex') regexValue!: RegExp;
  @Input('variableName') variableName: string = '';
  @Input('flat') flat: boolean = false;

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
