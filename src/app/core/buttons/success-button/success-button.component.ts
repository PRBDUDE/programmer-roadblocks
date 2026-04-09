import {Component, EventEmitter, input, Output} from '@angular/core';
import {Button, ButtonIconPosition, ButtonSeverity} from "primeng/button";
import {ButtonSize, Tabindex, TipPosition} from "@buttons/button-type";
import {Tooltip} from "primeng/tooltip";

@Component({
  selector: 'prb-success-button',
  imports: [
    Button,
    Tooltip
  ],
  templateUrl: './success-button.component.html',
  styleUrl: './success-button.component.scss',
  host: {
    '[attr.data-button-type]': '"success"',
    '[attr.tabindex]': 'tabindex()'
  }
})
export class SuccessButtonComponent {
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
  type = input<string>('button');
  tooltip = input<string | undefined>();
  showTipDelay = input<number>(0);
  showTipPosition = input<TipPosition>('top');

  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() onFocus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
  @Output() onBlur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
}
