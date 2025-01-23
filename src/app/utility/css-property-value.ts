const propertyHexColorRegex = /(#[0-9a-fA-F]{3,6})/g;
const propertyNumberUnitRegex = /(-?[\d|\.|,]+)(px|em|vw|vh|rem|deg)/g;
const propertyNumberCommaRegex = /(-?[\d|\.]+)(,)/g;
const propertyNumberRegex = /(-?[\d|\.]+)/g;
const propertyPercentageRegex = /(\d+)(%)/g;
const propertyWordQuoteRegex = /(\"[\w| |:|,|\.|\-|]+\")/g;
const propertyWordRegex = /([\w| |:|,|\.|\-|]+)/g;
const propertySignRegex = /(-|\+|\/|\*)/g;

export function cssPropertyValue(value: string): string {
  if (value.includes('(')) {
    const start = value.indexOf('(') + 1;
    const end = value.lastIndexOf(')');
    const args = value.slice(start, end).replaceAll(' ', '~');
    value = value.slice(0, start) + args + value.slice(end);
  }

  // replace all spaces within quotes with tilde before splitting the value
  value = value.replace(/"[^"]*"/g, (match) => {
    return match.replaceAll(' ', '~');
  });

  const values = value.split(' ').map((item) => item.replaceAll('~', ' '));
  const retValue: string[] = [];

  values.forEach((propValue) => {
    if (propValue.includes('(')) {
      const args = propValue.slice(propValue.indexOf('(') + 1, propValue.lastIndexOf(')'));
      const functionName = propValue.slice(0, propValue.indexOf('('));
      const functionEnd = propValue.slice(propValue.lastIndexOf(')'));
      retValue.push(`<span class="property-function">${functionName}</span>(${cssPropertyValue(args)}${functionEnd}`);
    } else if (propertyPercentageRegex.test(propValue)) {
      retValue.push(propValue.replace(propertyPercentageRegex, '<span class="property-number">$1</span><span class="property-percentage-unit">$2</span>'));
    } else if (propertyHexColorRegex.test(propValue)) {
      retValue.push(propValue.replace(propertyHexColorRegex, '<span class="property-number">$1</span>'));
    } else if (propertyNumberUnitRegex.test(propValue)) {
      retValue.push(propValue.replace(propertyNumberUnitRegex, '<span class="property-number">$1</span><span class="property-unit">$2</span>'));
    } else if (propertyNumberRegex.test(propValue)) {
      retValue.push(propValue.replace(propertyNumberRegex, '<span class="property-number">$1</span>'));
    } else if (propertyNumberCommaRegex.test(propValue)) {
      retValue.push(propValue.replace(propertyNumberCommaRegex, '<span class="property-number">$1</span>$2'));
    } else if (propertyWordQuoteRegex.test(propValue)) {
      retValue.push(propValue.replace(propertyWordQuoteRegex, '<span class="property-value">$1</span>'));
    } else if (propertyWordRegex.test(propValue)) {
      retValue.push(propValue.replace(propertyWordRegex, '<span class="property-value">$1</span>'));
    } else if (propertySignRegex.test(propValue)) {
      retValue.push(propValue.replace(propertySignRegex, '$1'));
    }
  });

  return retValue.join(' ');
}
