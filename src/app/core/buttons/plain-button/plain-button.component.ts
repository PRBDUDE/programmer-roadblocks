import {Component, input, output} from '@angular/core';
import {Button, ButtonIconPosition, ButtonSeverity} from "primeng/button";
import {ButtonSize, Tabindex, TipPosition} from "@buttons/button-type";
import {Tooltip} from "primeng/tooltip";

@Component({
  selector: 'prb-plain-button',
  imports: [
    Button,
    Tooltip
  ],
  templateUrl: './plain-button.component.html',
  styleUrl: './plain-button.component.scss',
  host: {
    '[attr.data-button-type]': '"plain"',
    '[attr.tabindex]': 'tabindex()'
  }
})
export class PlainButtonComponent {
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

  plainButton = {
    colorScheme: {
      light: {
        root: {
          primary: {
            'background': '{gray-100}',
            'hoverBackground': '{gray-50}',
            'borderColor': '{gray-300}',
            'hoverBorderColor': '{gray-200}',
            'color': '{gray-700}',
            'hoverColor': '{gray-500}',
            "focusRing": {
              "color": "{gray-500}",
              "shadow": "0 0 0 0.2rem rgba(13,110,253,.25)"
            }
          }
        }
      },
      dark: {
        root: {
          primary: {
            'background': '{gray-300}',
            'hoverBackground': '{gray-200}',
            'borderColor': '{gray-500}',
            'hoverBorderColor': '{gray-400}',
            'color': '{gray-900}',
            'hoverColor': '{gray-900}',
            "focusRing": {
              "color": "{gray-500}",
              "shadow": "0 0 0 0.2rem rgba(13,110,253,.25)"
            }
          }
        }
      }
    }
  }
}
