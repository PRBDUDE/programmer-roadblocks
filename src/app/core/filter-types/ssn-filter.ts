import {BaseFilterType} from "./base-filter-type";

export class SsnFilter extends BaseFilterType {
  ssn: string = "";

  getErrorMessages(): string[] {
    const errors: string[] = [];
    if (this.ssn.length !== 11) {
      errors.push(`must be 11 digits`);
    }

    if (!/^\d{3}-\d{2}-\d{4}$/.test(this.ssn)) {
      errors.push(`must be in the format of \'XXX-XX-XXXX\'`);
    }

    return errors;
  }

  isInvalid(): boolean {
    if (!this.ssn || !this._isActive) {
      return false;
    }
    return !/^\d{3}-\d{2}-\d{4}$/.test(this.ssn);
  }
}
