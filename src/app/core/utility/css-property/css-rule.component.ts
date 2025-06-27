import {Component, input, OnInit} from '@angular/core';
import {CssProperty} from "./model/css-property";
import {CssPropertyNameComponent} from "./css-property-name/css-property-name.component";
import {CssPropertyValueComponent} from "./css-property-value/css-property-value.component";

@Component({
  selector: 'prb-css-rule',
  imports: [
    CssPropertyNameComponent,
    CssPropertyValueComponent
  ],
  templateUrl: './css-rule.component.html',
  styleUrl: './css-rule.component.scss'
})
export class CssRuleComponent implements OnInit {
  selectors = input<string[]>([]);
  properties = input<CssProperty[]>([]);

  ngOnInit() {
    console.log(this.selectors);
  }
}
