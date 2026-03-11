import {Component, input} from '@angular/core';
import {Button, ButtonIconPosition, ButtonSeverity} from "primeng/button";
import {ButtonSize} from "@buttons/button-type";

@Component({
  selector: 'prb-plain-button',
    imports: [
        Button
    ],
  templateUrl: './plain-button.component.html',
  styleUrl: './plain-button.component.scss',
  host: {
    '[attr.data-button-type]': '"plain"'
  }
})
export class PlainButtonComponent {
  label = input<string>('Plain');
  size = input<ButtonSize>('large');
  rounded = input<boolean>(false);
  raised = input<boolean>(false);
  disabled = input<boolean>(false);
}
