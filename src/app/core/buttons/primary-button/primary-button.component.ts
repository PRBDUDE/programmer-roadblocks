import {Component, input} from '@angular/core';
import {Button, ButtonIconPosition, ButtonSeverity} from "primeng/button";
import {ButtonSize} from "@buttons/button-type";

@Component({
  selector: 'prb-primary-button',
    imports: [
        Button
    ],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
  host: {
    '[attr.data-button-type]': '"primary"'
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
}
