import {Component, EventEmitter, input, Output} from '@angular/core';
import {ButtonSize, Tabindex} from "@buttons/button-type";
import {Button, ButtonIconPosition, ButtonSeverity} from "primeng/button";

@Component({
  selector: 'prb-success-button',
  imports: [
    Button
  ],
  templateUrl: './success-button.component.html',
  styleUrl: './success-button.component.scss',
  host: {
    '[attr.data-button-type]': '"success"',
    '[attr.tabindex]': '"0"'
  }
})
export class SuccessButtonComponent {
  label = input<string>('Success');
  size = input<ButtonSize>('large');
  rounded = input<boolean>(false);
  raised = input<boolean>(false);
  disabled = input<boolean>(false);
  icon = input<string | undefined>('pi pi-thumbs-up-fill');
  iconPos = input<ButtonIconPosition>('left');
  badge = input<string | undefined>();
  badgeSeverity = input<ButtonSeverity>();
  tabindex = input<Tabindex>();

  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() onFocus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
  @Output() onBlur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
}
