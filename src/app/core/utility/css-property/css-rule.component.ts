import {Component, input, OnInit} from '@angular/core';
import {CssProperty} from "./model/css-property";
import {CssPropertyNameComponent} from "./css-property-name/css-property-name.component";
import {CssPropertyValueComponent} from "./css-property-value/css-property-value.component";
import {CssPropertyValueArrayComponent} from "@utility/css-property-value-array/css-property-value-array.component";
import {CssSelectorComponent} from "@utility/css-selector/css-selector.component";

@Component({
  selector: 'prb-css-rule',
  imports: [
    CssPropertyNameComponent,
    CssPropertyValueComponent,
    CssPropertyValueArrayComponent,
    CssSelectorComponent
  ],
  templateUrl: './css-rule.component.html',
  styleUrl: './css-rule.component.scss'
})
export class CssRuleComponent implements OnInit {
  level = input<number>(0);
  selectors = input<string[]>([]);
  properties = input<CssProperty[]>([]);

  ngOnInit() {
    // console.log('CssRuleComponent - selectors: ', this.selectors());
    // console.log('CssRuleComponent - properties: ', this.properties());
  }

  getIndentation(extra: number = 0) {
    const count = this.level() + extra;
    return '\u00A0'.repeat(count * 4);
  }
}
