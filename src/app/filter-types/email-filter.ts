import {BaseFilterType} from "./base-filter-type";

export class EmailFilter extends BaseFilterType {
  email: string = '';

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

  isInvalid(): boolean {
    if (!this.email || !this._isActive) {
      return false;
    }
    return !/^[A-Za-z\d\.\-_]*@[A-Za-z\d\.\-_]*\.[A-Za-z]{3}$/.test(this.email);
  }
}
