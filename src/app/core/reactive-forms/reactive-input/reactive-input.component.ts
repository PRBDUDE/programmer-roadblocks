import {ChangeDetectorRef, Component, ElementRef, forwardRef, inject, Input, Renderer2} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators} from "@angular/forms";

let uniqueId = 0;

@Component({
  selector: 'prb-reactive-input',
  imports: [
    ReactiveFormsModule
  ],
  providers: [
    {provide: 'uniqueId',
      useValue: uniqueId++},
    {provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ReactiveInputComponent)}
  ],
  templateUrl: './reactive-input.component.html',
  styleUrl: './reactive-input.component.scss'
})
export class ReactiveInputComponent implements ControlValueAccessor {
  protected readonly Validators = Validators;
  private readonly cd: ChangeDetectorRef = inject(ChangeDetectorRef);
  private _renderer2 = inject(Renderer2);
  private _elementRef = inject(ElementRef);
  protected _rfInputId = `form_input_${uniqueId++}`;

  /**
   * @Input type: string = 'text'
   * @group Props
   * The type of the input element.
   */
  @Input() type: string = 'text';
  /**
   * @Input required: boolean = false
   * @group Props
   * Whether the input is required.
   */
  @Input() placeholder: string | undefined;
  @Input() label: string | undefined;
  @Input() name!: string;
  @Input() tabindex: string | undefined;

  model = '';
  focused: boolean = false;
  disabled: boolean = false;
  onModelChange: () => void = () => {};
  onModelTouched: () => void = () => {};

  writeValue(value: string): void {
    this._renderer2.setProperty(this._elementRef.nativeElement, 'value', value);
  }

  registerOnChange(fn: () => void): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onModelTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this._renderer2.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    this.cd.markForCheck();
  }

  protected readonly NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
}
