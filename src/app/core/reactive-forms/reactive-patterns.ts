export class ReactivePatterns {
  readonly validStateCodesPattern = /AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY/i;
  readonly validStateCodesPlainTextPattern = 'AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY';
  readonly zipCodePattern = /^\d{5}(-\d{4})?$/;
  readonly zipCodePlainTextPattern = "99999 or 99999-9999";
  readonly phonePattern = /^\((\d{3})\) (\d{3})-(\d{4})$/;
  readonly phonePlainTextPattern = "(999) 999-9999";

}
