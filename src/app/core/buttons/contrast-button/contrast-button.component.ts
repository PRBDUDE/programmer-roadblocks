import {Component, input} from '@angular/core';
import {ButtonSize} from "@buttons/button-type";
import {Button, ButtonIconPosition, ButtonSeverity} from "primeng/button";

@Component({
  selector: 'prb-contrast-button',
  imports: [
    Button
  ],
  templateUrl: './contrast-button.component.html',
  styleUrl: './contrast-button.component.scss',
  host: {
    '[attr.data-button-type]': '"contrast"'
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
}
