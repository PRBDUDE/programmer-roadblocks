import {Component, EventEmitter, input, Output} from '@angular/core';
import {ButtonSize, Tabindex} from "@buttons/button-type";
import {Button, ButtonIconPosition, ButtonSeverity} from "primeng/button";

@Component({
  selector: 'prb-contrast-button',
  imports: [
    Button
  ],
  templateUrl: './contrast-button.component.html',
  styleUrl: './contrast-button.component.scss',
  host: {
    '[attr.data-button-type]': '"contrast"',
    '[attr.tabindex]': '"0"'
  }
})
export class ContrastButtonComponent {
  label = input<string>('Contrast');
  size = input<ButtonSize>('large');
  rounded = input<boolean>(false);
  raised = input<boolean>(false);
  disabled = input<boolean>(false);
  icon = input<string | undefined>();
  iconPos = input<ButtonIconPosition>('left');
  badge = input<string | undefined>();
  badgeSeverity = input<ButtonSeverity>();
  tabindex = input<Tabindex>();

  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() onFocus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
  @Output() onBlur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
}
