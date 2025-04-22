import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DebugOutputCardComponent} from "@utility/debug-output-card.component";
import {isDebugMode} from "@utility/is-debug-mode";
import {NgClass} from "@angular/common";
import {Button, ButtonLabel} from "primeng/button";
import {InputMask} from "primeng/inputmask";
import {InputText} from "primeng/inputtext";
import {DatePicker} from "primeng/datepicker";
import {ReactiveErrorComponent} from "../../../core/reactive-forms/reactive-error/reactive-error.component";
import {ReactivePatterns} from "../../../core/reactive-forms/reactive-patterns";

@Component({
  selector: 'prb-reactive-entry-form',
  imports: [
    ReactiveFormsModule,
    DebugOutputCardComponent,
    DebugOutputCardComponent,
    NgClass,
    Button,
    InputMask,
    InputText,
    DatePicker,
    ReactiveErrorComponent,
    ButtonLabel
  ],
  templateUrl: './reactive-entry-form.component.html',
  styleUrl: './reactive-entry-form.component.scss'
})
export class ReactiveEntryFormComponent extends ReactivePatterns implements OnInit {
  protected readonly isDebugMode = isDebugMode;

  fb = inject(FormBuilder);
  entryForm!: FormGroup;

  ngOnInit() {
    this.entryForm = this.fb.group({
      name: this.fb.group({
        first: ['', Validators.required],
        last: ['', Validators.required]
      }),
      personal: this.fb.group({
        birthdate: [''],
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
    });
  }

  onSubmit() {
    console.log(this.entryForm.value);
  }

  isFormValid(): boolean {
    return !this.entryForm.valid;
  }

  isFormTouched(): boolean {
    return !this.entryForm.touched;
  }

  get firstNameControl(): FormControl {
    return this.entryForm.get('name.first') as FormControl;
  }

  get lastNameControl(): FormControl {
    return this.entryForm.get('name.last') as FormControl;
  }

  get birthdateControl(): FormControl {
    return this.entryForm.get('personal.birthdate') as FormControl;
  }

  get streetControl(): FormControl {
    return this.entryForm.get('address.street') as FormControl;
  }

  get cityControl(): FormControl {
    return this.entryForm.get('address.city') as FormControl;
  }

  get stateControl(): FormControl {
    return this.entryForm.get('address.state') as FormControl;
  }

  get zipControl(): FormControl {
    return this.entryForm.get('address.zip') as FormControl;
  }

  get emailControl(): FormControl {
    return this.entryForm.get('contact.email') as FormControl;
  }

  get phoneControl(): FormControl {
    return this.entryForm.get('contact.phone') as FormControl;
  }

  protected readonly Validators = Validators;
}
