import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ReactivePatterns} from "../reactive-patterns";

@Component({
  selector: 'prb-reactive-error',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReactiveErrorComponent),
      multi: true
    }
  ],
  templateUrl: './reactive-error.component.html',
  styleUrl: './reactive-error.component.scss'
})
export class ReactiveErrorComponent extends ReactivePatterns implements ControlValueAccessor {

  value: string | null | undefined;
  onChanged: any = () => {
  };
  onTouched: any = () => {
  };
  disabled: boolean = false;

  @Input() formControl!: FormControl;

  writeValue(formControl: FormControl): void {
    if (formControl?.value) {
      this.value = formControl.value;
    }
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  hasErrorMessages(): boolean {
    if (!this.formControl) {
      console.log('ReactiveErrorComponent: formControl is undefined')
    }
    return this.formControl.touched &&
      this.formControl.invalid;
  }

  getErrorMessages(): string[] {
    const errors: string[] = [];
    if (this.formControl.hasError('required')) {
      errors.push('This field is required.');
    }
    if (this.formControl.hasError('email')) {
      errors.push('Please enter a valid email address.');
    }
    if (this.formControl.hasError('pattern')) {
      if (this.formControl.getError('pattern').requiredPattern == this.zipCodePattern) {
        errors.push('Valid pattern is \"' + this.zipCodePlainTextPattern + '\".');
      } else if (this.formControl.getError('pattern').requiredPattern == this.phonePattern) {
        errors.push('Valid pattern is \"' + this.phonePlainTextPattern + '\".');
      } else if (this.formControl.getError('pattern').requiredPattern == this.validStateCodesPattern) {
        const validStateCodes = this.validStateCodesPlainTextPattern.split('|')
          .filter(s => s.includes(this.formControl.getError('pattern').actualValue.toUpperCase()));
        if (validStateCodes.length > 0) {
          errors.push('Valid state codes are \"' + validStateCodes.join('\", \"') + '\".');
        } else {
          errors.push('Valid state codes are \"' + this.validStateCodesPlainTextPattern.split('|').join('\", \"') + '\".');
        }
      } else {
        errors.push('Valid pattern ' + this.formControl.getError('pattern').requiredPattern);
      }
      errors.push('Actual Value \"' + this.formControl.getError('pattern').actualValue.toUpperCase() + '\" is invalid.');
    }
    return errors;
  }
}
