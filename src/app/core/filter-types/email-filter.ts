import {BaseFilterType} from "./base-filter-type";

/**
 * Email filter type
 * @class EmailFilter
 * @extends {BaseFilterType}
 *
 * @property {string} email - email address
 *
 * @method getErrorMessages - returns an array of error messages
 * @method isInvalid - returns true if email is invalid, false otherwise
 */
export class EmailFilter extends BaseFilterType {
  /**
   * Creates an instance of email.
   * @group props
   * @type {string}
   */
  email: string = '';

  /**
   * Gets an array of error messages for the email
   * @returns {string[]} an array of error messages
   */
  getErrorMessages(): string[] {
    const errors: string[] = [];
    if (!this.email) {
      return errors;
    }
    const atSymb = this.email.indexOf('@');
    const period = this.email.lastIndexOf('\.');

    if (atSymb === -1) {
      errors.push(`must contain \'@\'`);
    }

    if (atSymb === -1 && period === -1) {
      errors.push(`must contain \'.\' in domain`);
    }

    if ((atSymb < period) && ((this.email.length - 1) - period) !== 3) {
      errors.push(`must contain top level domain`);
    }

    if (atSymb !== -1 && /([^A-Za-z\d\.\-_]*)@/.test(this.email)) {
      errors.push(`email contains invalid characters`);
    }

    return errors;
  }

  /**
   * @returns {boolean} true if email is invalid, false otherwise
   */
  isInvalid(): boolean {
    if (!this.email || !this._isActive) {
      return false;
    }
    return !/^[A-Za-z\d\.\-_]*@[A-Za-z\d\.\-_]*\.[A-Za-z]{3}$/.test(this.email);
  }
}
