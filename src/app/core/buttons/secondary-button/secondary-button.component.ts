import {Component, EventEmitter, input, Output, output} from '@angular/core';
import {Button, ButtonIconPosition, ButtonSeverity} from "primeng/button";
import {ButtonSize, Tabindex} from "@buttons/button-type";

@Component({
  selector: 'prb-secondary-button',
    imports: [
        Button
    ],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.scss',
  host: {
    '[attr.data-button-type]': '"secondary"',
    '[attr.tabindex]': '"0"'
  }
})
export class SecondaryButtonComponent {
  label = input<string>('Secondary');
  size = input<ButtonSize>('large');
  rounded = input<boolean>(false);
  raised = input<boolean>(false);
  disabled = input<boolean>(false);
  tabindex = input<Tabindex>();
  type = input<string>('button');

  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() onFocus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
  @Output() onBlur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
}
