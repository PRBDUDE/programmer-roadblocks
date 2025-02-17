import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DebugOutputCardComponent} from "@utility/debug-output-card.component";
import {isDebugMode} from "@utility/is-debug-mode";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-reactive-entry-form',
  imports: [
    ReactiveFormsModule,
    DebugOutputCardComponent,
    DebugOutputCardComponent,
    NgIf
  ],
  templateUrl: './reactive-entry-form.component.html',
  styleUrl: './reactive-entry-form.component.scss'
})
export class ReactiveEntryFormComponent {
  protected readonly isDebugMode = isDebugMode;

  readonly validStateCodesPattern= /AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY/;
  readonly zipCodePattern = /^\d{5}(-\d{4})?$/;
  readonly phonePattern = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;

  entryForm: FormGroup = new FormGroup({
    name: new FormGroup({
      first: new FormControl('', Validators.required),
      last: new FormControl('', Validators.required)
    }),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', [Validators.required, Validators.pattern(this.validStateCodesPattern)]),
      zip: new FormControl('', [Validators.required, Validators.pattern(this.zipCodePattern)]),
    }),
    contact: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)]),
    })
  } as any);

  onSubmit() {
    console.log(this.entryForm.value);
  }

  isValid() {
    return !this.entryForm.valid;
  }
}
