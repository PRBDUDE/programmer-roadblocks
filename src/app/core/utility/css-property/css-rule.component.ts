import {Component, Input, OnInit} from '@angular/core';
import {CssProperty} from "./model/css-property";
import {CssPropertyNameComponent} from "./css-property-name/css-property-name.component";
import {CssPropertyValueComponent} from "./css-property-value/css-property-value.component";

@Component({
  selector: 'app-css-rule',
  imports: [
    CssPropertyNameComponent,
    CssPropertyValueComponent
  ],
  templateUrl: './css-rule.component.html',
  styleUrl: './css-rule.component.scss'
})
export class CssRuleComponent implements OnInit {
  @Input() selectors: string[] = [];
  @Input() properties: CssProperty[] = [];

  ngOnInit() {
    console.log(this.selectors);
  }
}
