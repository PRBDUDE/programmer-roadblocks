import {Component, input} from '@angular/core';
import {Button, ButtonIconPosition, ButtonSeverity} from "primeng/button";
import {ButtonSize} from "@buttons/button-type";

@Component({
  selector: 'prb-tertiary-button',
    imports: [
        Button
    ],
  templateUrl: './tertiary-button.component.html',
  styleUrl: './tertiary-button.component.scss',
  host: {
    '[attr.data-button-type]': '"tertiary"'
  }
})
export class TertiaryButtonComponent {
  label = input<string>('Tertiary');
  size = input<ButtonSize>('large');
  rounded = input<boolean>(false);
  raised = input<boolean>(false);
  disabled = input<boolean>(false);
}
