import {Component, EventEmitter, input, Output} from '@angular/core';
import {Button, ButtonIconPosition, ButtonSeverity} from "primeng/button";
import {ButtonSize, Tabindex} from "@buttons/button-type";

@Component({
  selector: 'prb-primary-button',
  imports: [
    Button
  ],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
  host: {
    '[attr.data-button-type]': '"primary"',
    '[attr.tabindex]': 'tabindex()'
  }
})
export class PrimaryButtonComponent {
  label = input<string>('Primary');
  size = input<ButtonSize>('large');
  rounded = input<boolean>(false);
  raised = input<boolean>(false);
  disabled = input<boolean>(false);
  icon = input<string | undefined>();
  iconPos = input<ButtonIconPosition>('left');
  badge = input<string | undefined>();
  badgeSeverity = input<ButtonSeverity>();
  tabindex = input<Tabindex>();
  type = input<string | undefined>();

  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() onFocus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
  @Output() onBlur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
}
