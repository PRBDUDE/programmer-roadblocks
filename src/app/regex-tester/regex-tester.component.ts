import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-regex-tester',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './regex-tester.component.html',
  styleUrl: './regex-tester.component.scss'
})
export class RegexTesterComponent {

  readonly INITIAL_PATTERN = '[A-Za-z0-9]{3}';

  isRegExInvalid = false;
  testRegExp = new RegExp(this.INITIAL_PATTERN, 'dg');

  _pattern = this.INITIAL_PATTERN;

  set pattern(pattern: string) {
    this._pattern = pattern;
    try {
      this.testRegExp = new RegExp(pattern, 'dg');
      this.isRegExInvalid = false;
    } catch (err) {
      this.isRegExInvalid = true;
    }
  }

  get pattern() {
    return this._pattern;
  }
  _testData = '';

  set testData(data: string) {
    this._testData = data;
    console.log('Has Indices: ', this.testRegExp.hasIndices);
  }

  get testData() {
    return this._testData;
  }

  isMatchFound() {
    return this.testRegExp.test(this._testData);
  }

  hasIndices() {
    this.listMatches();
    return this.testRegExp.hasIndices;
  }

  listMatches() {
    const matches = this.testData.match(this.pattern);
    matches?.forEach((match, index) => {
      console.log('match[' + index +']', match);
    })
  }
}
