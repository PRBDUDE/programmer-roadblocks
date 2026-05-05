import {Component, input, output} from '@angular/core';
import {Button, ButtonIconPosition, ButtonSeverity} from "primeng/button";
import {Tooltip} from "primeng/tooltip";
import {ButtonSize, Tabindex, TipPosition} from "@buttons/button-type";

@Component({
  selector: 'prb-warning-button',
  imports: [
    Button,
    Tooltip
  ],
  templateUrl: './warning-button.component.html',
  styleUrl: './warning-button.component.scss',
  host: {
    '[attr.data-button-type]': '"warning"',
    '[attr.tabindex]': 'tabindex()'
  }
})
export class WarningButtonComponent {
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

  readonly onClick = output<MouseEvent>();
  readonly onFocus = output<FocusEvent>();
  readonly onBlur = output<FocusEvent>();
}
