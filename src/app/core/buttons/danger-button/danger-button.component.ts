import {Component, input} from '@angular/core';
import {Button, ButtonSeverity} from "primeng/button";
import {ButtonSize} from "@buttons/button-type";

@Component({
  selector: 'prb-danger-button',
    imports: [
        Button
    ],
  templateUrl: './danger-button.component.html',
  styleUrl: './danger-button.component.scss',
  host: {
    '[attr.data-button-type]': '"danger"'
  }
})
export class DangerButtonComponent {
  label = input<string>('Danger');
  size = input<ButtonSize>('large');
  rounded = input<boolean>(false);
  raised = input<boolean>(false);
  disabled = input<boolean>(false);
  icon = input<string | undefined>('pi pi-exclamation-circle');
  iconPos = input<"left" | "right" | "top" | "bottom">('left');
  badge = input<string | undefined>();
  badgeSeverity = input<ButtonSeverity>();
}
