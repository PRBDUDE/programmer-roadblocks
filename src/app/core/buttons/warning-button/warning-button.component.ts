import {Component, EventEmitter, input, Output} from '@angular/core';
import {Button, ButtonIconPosition, ButtonSeverity} from "primeng/button";
import {ButtonSize, Tabindex} from "@buttons/button-type";

@Component({
  selector: 'prb-warning-button',
    imports: [
        Button
    ],
  templateUrl: './warning-button.component.html',
  styleUrl: './warning-button.component.scss',
  host: {
    '[attr.data-button-type]': '"warning"',
    '[attr.tabindex]': '"0"'
  }
})
export class WarningButtonComponent {
  label = input<string>('Warning');
  size = input<ButtonSize>('large');
  rounded = input<boolean>(false);
  raised = input<boolean>(false);
  disabled = input<boolean>(false);
  icon = input<string | undefined>('pi pi-exclamation-triangle');
  iconPos = input<ButtonIconPosition>('right');
  badge = input<string | undefined>();
  badgeSeverity = input<ButtonSeverity>();
  tabindex = input<Tabindex>();

  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() onFocus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
  @Output() onBlur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
}
