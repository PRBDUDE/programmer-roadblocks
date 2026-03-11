import {Component, input} from '@angular/core';
import {Button, ButtonIconPosition, ButtonSeverity} from "primeng/button";
import {ButtonSize} from "@buttons/button-type";

@Component({
  selector: 'prb-secondary-button',
    imports: [
        Button
    ],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.scss',
  host: {
    '[attr.data-button-type]': '"secondary"'
  }
})
export class SecondaryButtonComponent {
  label = input<string>('Secondary');
  size = input<ButtonSize>('large');
  rounded = input<boolean>(false);
  raised = input<boolean>(false);
  disabled = input<boolean>(false);
}
