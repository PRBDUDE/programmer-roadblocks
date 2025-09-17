import {Component, input} from '@angular/core';

@Component({
  selector: 'prb-css-property-value',
  imports: [],
  templateUrl: './css-property-value.component.html',
  styleUrl: './css-property-value.component.scss'
})
export class CssPropertyValueComponent {
  hexNumber = /#[\da-fA-F]{6}/;
  numberUnit = /[0-9]+(px|em|rem|%|vw|vh|vmin|vmax|deg|s|ms|rad|turn|fr)/;
  number = /[0-9]+/;
  percentage = /[0-9]+%/;
  stringValue = /"[^"]*"/;
  calcValue = /calc\((.*)([-+/*])(.*)\)/;
  value = input<string>('');

  isHexNumber(): boolean {
    return this.hexNumber.test(this.value());
  }

  isNumberUnit(): boolean {
    return this.numberUnit.test(this.value());
  }

  isNumber(): boolean {
    return this.number.test(this.value());
  }

  isPercentage(): boolean {
    return this.percentage.test(this.value());
  }

  isCalcValue(): boolean {
    // console.log(this.value());
    // console.log('isCalcValue: ', this.calcValue.test(this.value()));
    return this.calcValue.test(this.value());
  }

  getHexNumber() {
    // console.log('getHexNumber: ', this.value().replace(/[^0-9a-zA-Z]/g, ''));
    return this.value().replace(/[^0-9a-zA-Z]/g, '');
  }

  getNumber() {
    // console.log('getNumber: ', this.value().replace(/[0-9]*/g, ''));
    return this.value().replace(/[^0-9]/g, '');
  }

  getUnit() {
    // console.log('getUnit: ', this.value().replace(/[0-9]*/g, ''));
    return this.value().replace(/[0-9]/g, '');
  }

  getCalcFirstValue() {
    // console.log('getCalcFirstValue: ', this.value()
    //   .replace(/calc\((.*)([-+/*])(.*)\)/, '$1')
    //   .replace(/[^0-9]/g, ''));
    return this.value()
      .replace(/calc\((.*)([-+/*])(.*)\)/, '$1')
      .replace(/[^0-9]/g, '').trim();
  }

  getCalcFirstUnit() {
    return this.value()
      .replace(/calc\((.*)([-+/*])(.*)\)/, '$1')
      .replace(/[0-9]/g, '').trim();
  }

  getCalcOperator() {
    return this.value()
      .replace(/calc\((.*)([-+/*])(.*)\)/, '$2').trim();
  }

  getCalcSecondValue() {
    return this.value()
      .replace(/calc\((.*)([-+/*])(.*)\)/, '$3')
      .replace(/[^0-9]/g, '').trim();
  }

  getCalcSecondUnit() {
    return this.value()
      .replace(/calc\((.*)([-+/*])(.*)\)/, '$3')
      .replace(/[0-9]/g, '').trim();
  }
}
