import {BaseFilterType} from "./base-filter-type";

export class PhoneNumberFilter extends BaseFilterType {
  phoneNumber: string = '';

  getErrorMessages(): string[] {
    const errors: string[] = [];

    if (this.phoneNumber.length !== 14) {
      errors.push(`must be 10 digits`);
    }

    if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(this.phoneNumber)) {
      errors.push(`must be in the format of \'(XXX) XXX-XXXX\'`);
    }

    return errors;
  }

  isInvalid(): boolean {
    if (!this.phoneNumber || !this._isActive) {
      return false;
    }
    return !/^\(\d{3}\) \d{3}-\d{4}$/.test(this.phoneNumber);
  }
}
