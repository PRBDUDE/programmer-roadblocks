import {Component, EventEmitter, input, Output} from '@angular/core';
import {ButtonSize, Tabindex} from "@buttons/button-type";
import {Button, ButtonIconPosition, ButtonSeverity} from "primeng/button";

@Component({
  selector: 'prb-help-button',
  imports: [
    Button
  ],
  templateUrl: './help-button.component.html',
  styleUrl: './help-button.component.scss',
  host: {
    '[attr.data-button-type]': '"help"',
    '[attr.tabindex]': '"0"'
  }
})
export class HelpButtonComponent {
  label = input<string>('Help');
  size = input<ButtonSize>('large');
  rounded = input<boolean>(false);
  raised = input<boolean>(false);
  disabled = input<boolean>(false);
  icon = input<string | undefined>('pi pi-question-circle');
  iconPos = input<ButtonIconPosition>('right');
  badge = input<string | undefined>();
  badgeSeverity = input<ButtonSeverity>();
  tabindex = input<Tabindex>();
  type = input<string>('button');

  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() onFocus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
  @Output() onBlur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
}
