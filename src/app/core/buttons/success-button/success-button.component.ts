import {Component, input} from '@angular/core';
import {ButtonSize} from "@buttons/button-type";
import {Button, ButtonIconPosition, ButtonSeverity} from "primeng/button";

@Component({
  selector: 'prb-success-button',
  imports: [
    Button
  ],
  templateUrl: './success-button.component.html',
  styleUrl: './success-button.component.scss',
  host: {
    '[attr.data-button-type]': '"success"'
  }
})
export class SuccessButtonComponent {
  label = input<string>('Success');
  size = input<ButtonSize>('large');
  rounded = input<boolean>(false);
  raised = input<boolean>(false);
  disabled = input<boolean>(false);
  icon = input<string | undefined>('pi pi-thumbs-up-fill');
  iconPos = input<ButtonIconPosition>('left');
  badge = input<string | undefined>();
  badgeSeverity = input<ButtonSeverity>();
}
