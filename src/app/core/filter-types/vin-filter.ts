import {BaseFilterType} from "./base-filter-type";

export class VinFilter extends BaseFilterType {
  vin: string = "";

  getErrorMessages(): string[] {
    const errors: string[] = [];

    if (this.vin.length > 0 && this.vin.length !== 17) {
      errors.push(`must be 17 characters long`);
    }

    if (this.vin.includes('I')) {
      errors.push(`may not contain \'I\'`);
    }

    if (this.vin.includes('O')) {

      errors.push(`may not contain \'O\'`);
    }

    if (this.vin.includes('Q')) {
      errors.push(`may not contain \'Q\'`);
    }

    const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
      'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
      'x', 'y', 'z'];

    lowerCase.forEach(letter => {
      if (this.vin.includes(letter)) {
        errors.push(`may not contain lowercase letter \'${letter}\'`);
      }
    })

    return errors;
  }

  isInvalid(): boolean {
    if (!this.vin || !this._isActive) {
      return false;
    }
    return !/^[A-HJ-NPR-Z0-9]{17}$/.test(this.vin);
  }
}
