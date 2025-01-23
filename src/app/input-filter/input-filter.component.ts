import {Component} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {InputMaskModule} from "primeng/inputmask";

@Component({
  selector: 'app-input-filter',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    NgIf,
    NgForOf,
    InputMaskModule
  ],
  templateUrl: './input-filter.component.html',
  styleUrl: './input-filter.component.scss'
})
export class InputFilterComponent {
  ssn: string = '';
  ssnActive = false;
  phoneNumber: string = '';
  phoneNumberActive = false;
  vin = '';
  vinActive = false;
  email = '';
  emailActive = false;

  isInvalidVin(): boolean {
    if (!this.vin || !this.vinActive) {
      return false;
    }
    return !/^[A-HJ-NPR-Z0-9]{17}$/.test(this.vin);
  }

  isInvalidEmail(): boolean {
    if (!this.email || !this.emailActive) {
      return false;
    }
    return !/^[A-Za-z\d\.\-_]*@[A-Za-z\d\.\-_]*\.[A-Za-z]{3}$/.test(this.email);
  }

  vinErrorMessage(): string[] {
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

  emailErrorMessage(): string[] {
    const errors: string[] = [];
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

  phoneNumberHasFocus() {
    this.phoneNumberActive = true;
  }

  phoneNumberLostFocus() {
    this.phoneNumberActive = false;
  }

  isInvalidPhoneNumber() {
    if (!this.phoneNumber || !this.phoneNumberActive) {
      return false;
    }
    return !/^\(\d{3}\) \d{3}-\d{4}$/.test(this.phoneNumber);
  }

  phoneNumberErrorMessage() {
    const errors: string[] = [];

    if (this.phoneNumber.length !== 14) {
      errors.push(`must be 10 digits`);
    }

    if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(this.phoneNumber)) {
      errors.push(`must be in the format of \'(XXX) XXX-XXXX\'`);
    }

    return errors;
  }

  ssnHasFocus() {
    this.ssnActive = true;
  }

  ssnLostFocus() {
    this.ssnActive = false;
  }

  isInvalidSsn() {
    if (!this.ssn || !this.ssnActive) {
      return false;
    }
    return !/^\d{3}-\d{2}-\d{4}$/.test(this.ssn);
  }

  ssnErrorMessage() {
    const errors: string[] = [];
    if (this.ssn.length !== 11) {
      errors.push(`must be 11 digits`);
    }

    if (!/^\d{3}-\d{2}-\d{4}$/.test(this.ssn)) {
      errors.push(`must be in the format of \'XXX-XX-XXXX\'`);
    }

    return errors;
  }

  vinHasFocus() {
    this.vinActive = true;
  }

  vinLostFocus() {
    this.vinActive = false;
  }

  emailHasFocus() {
    this.emailActive = true;
  }

  emailLostFocus() {
    this.emailActive = false;
  }
}
