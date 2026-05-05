import {Component, input, output} from '@angular/core';
import {ButtonSize, Tabindex, TipPosition} from "@buttons/button-type";
import {Button, ButtonIconPosition, ButtonSeverity} from "primeng/button";
import {Tooltip} from "primeng/tooltip";

@Component({
  selector: 'prb-contrast-button',
  imports: [
    Button,
    Tooltip
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
  type = input<string>('button');
  tooltip = input<string | undefined>();
  showTipDelay = input<number>(0);
  showTipPosition = input<TipPosition>('top');

  readonly onClick = output<MouseEvent>();
  readonly onFocus = output<FocusEvent>();
  readonly onBlur = output<FocusEvent>();
}
