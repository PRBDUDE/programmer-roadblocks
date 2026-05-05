import {Component, input, output} from '@angular/core';
import {Button, ButtonIconPosition, ButtonSeverity} from "primeng/button";
import {ButtonSize, Tabindex, TipPosition} from "@buttons/button-type";
import {Tooltip} from "primeng/tooltip";

@Component({
  selector: 'prb-danger-button',
  imports: [
    Button,
    Tooltip
  ],
  templateUrl: './danger-button.component.html',
  styleUrl: './danger-button.component.scss',
  host: {
    '[attr.data-button-type]': '"danger"',
    '[attr.tabindex]': 'tabindex()'
  }
})
export class DangerButtonComponent {
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
  type = input<string>('button');
  tooltip = input<string | undefined>();
  showTipDelay = input<number>(0);
  showTipPosition = input<TipPosition>('top');

  readonly onClick = output<MouseEvent>();
  readonly onFocus = output<FocusEvent>();
  readonly onBlur = output<FocusEvent>();
}
