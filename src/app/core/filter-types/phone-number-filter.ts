import {BaseFilterType} from "./base-filter-type";

/**
 * A filter type for phone numbers.
 * @class PhoneNumberFilter
 * @extends {BaseFilterType}
 *
 * @property {string} phoneNumber - The phone number to be filtered.
 *
 * @method getErrorMessages - Returns an array of error messages for the phone number.
 * @method isInvalid - Returns true if the phone number is invalid, false otherwise.
 */
export class PhoneNumberFilter extends BaseFilterType {
  /**
   * Creates an instance of PhoneNumber.
   * @property {string} phoneNumber - The phone number to be filtered.
   */
  phoneNumber: string = '';

  /**
   * @returns {string[]} An array of error messages for the phone number.
   */
  getErrorMessages(): string[] {
    const errors: string[] = [];

    if (this.phoneNumber.length !== 14) {
      errors.push(`must be 10 digits`);
    }

    if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(this.phoneNumber)) {
      errors.push(`must be in the format of '(XXX) XXX-XXXX'`);
    }

    return errors;
  }

  /**
   * @returns {boolean} Returns true if the phone number is invalid, false otherwise.
   */
  isInvalid(): boolean {
    if (!this.phoneNumber || !this._isActive) {
      return false;
    }
    return !/^\(\d{3}\) \d{3}-\d{4}$/.test(this.phoneNumber);
  }
}
