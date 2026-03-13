import {EventEmitter, input, Output} from "@angular/core";
import {ButtonSize, Tabindex} from "@buttons/button-type";
import {ButtonIconPosition, ButtonSeverity} from "primeng/button";

export class CoreButton {
  label = input<string>('undefined');
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
