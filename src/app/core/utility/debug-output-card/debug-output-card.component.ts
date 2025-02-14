import {AfterViewInit, Component, Input} from '@angular/core';
import {JsonPipe, NgClass, NgIf} from "@angular/common";

let uniqueId = 0;

@Component({
  selector: 'app-debug-output-card',
  imports: [
    JsonPipe,
    NgIf,
    NgClass
  ],
  templateUrl: './debug-output-card.component.html',
  styleUrl: './debug-output-card.component.scss'
})
export class DebugOutputCardComponent implements AfterViewInit {
  @Input('title') title: string = '';
  @Input('json') jsonValue!: object;
  @Input('string') stringValue!: string;
  @Input('number') numberValue!: number;
  @Input('boolean') booleanValue!: boolean;
  @Input('regex') regexValue!: RegExp;
  @Input('variableName') variableName: string = '';
  @Input('flat') flat: boolean = false;

  private _rightPosition: string = '50px';
  private _topPosition: string = '100px';
  @Input('right')
  set right(rightPosition: string) {
    this._rightPosition = rightPosition;
  }

  @Input('top')
  set top(topPosition: string) {
    this._topPosition = topPosition;
  }

  debugOutputId = `debug_output_${uniqueId++}`;

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    const div = document.getElementById(this.debugOutputId);
    console.log(this.title + ' - id:', this.debugOutputId);
    if (div) {
      console.log('div:', div);
      div.style.right = this._rightPosition;
      console.log(this.title + ' - right:', this._rightPosition, this.debugOutputId);
      div.style.top = this._topPosition;
      console.log(this.title + ' - top:', this._topPosition, this.debugOutputId);
    }
    console.log(this.title + ' - div.style:', div?.style.right, div?.style.top);
  }

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
}
