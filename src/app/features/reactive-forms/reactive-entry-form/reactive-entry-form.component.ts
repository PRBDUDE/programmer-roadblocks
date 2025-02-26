import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DebugOutputCardComponent} from "@utility/debug-output-card.component";
import {isDebugMode} from "@utility/is-debug-mode";

@Component({
  selector: 'app-reactive-entry-form',
  imports: [
    ReactiveFormsModule,
    DebugOutputCardComponent,
    DebugOutputCardComponent
  ],
  templateUrl: './reactive-entry-form.component.html',
  styleUrl: './reactive-entry-form.component.scss'
})
export class ReactiveEntryFormComponent implements OnInit {
  protected readonly isDebugMode = isDebugMode;

  readonly validStateCodesPattern= /AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY/;
  readonly zipCodePattern = /^\d{5}(-\d{4})?$/;
  readonly phonePattern = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;

  fb = inject(FormBuilder);
  entryForm!: FormGroup;

  ngOnInit() {
    this.entryForm = this.fb.group({
      name: this.fb.group({
        first: ['', Validators.required],
        last: ['', Validators.required]
      }),
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', [Validators.required, Validators.pattern(this.validStateCodesPattern)]],
        zip: ['', [Validators.required, Validators.pattern(this.zipCodePattern)]],
      }),
      contact: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
      })
    } as any);
  }

  onSubmit() {
    console.log(this.entryForm.value);
  }

  isValid() {
    return !this.entryForm.valid;
  }
}
