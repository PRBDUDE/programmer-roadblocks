import {Component, EventEmitter, input, Output} from '@angular/core';
import {Button, ButtonIconPosition, ButtonSeverity} from "primeng/button";
import {ButtonSize, Tabindex} from "@buttons/button-type";

@Component({
  selector: 'prb-information-button',
    imports: [
        Button
    ],
  templateUrl: './information-button.component.html',
  styleUrl: './information-button.component.scss',
  host: {
    '[attr.data-button-type]': '"information"',
    '[attr.tabindex]': '"0"'
  }
})
export class InformationButtonComponent {
  label = input<string>('Information');
  size = input<ButtonSize>('large');
  rounded = input<boolean>(false);
  raised = input<boolean>(false);
  disabled = input<boolean>(false);
  icon = input<string | undefined>('pi pi-info-circle');
  iconPos = input<ButtonIconPosition>('left');
  badge = input<string | undefined>();
  badgeSeverity = input<ButtonSeverity>();
  tabindex = input<Tabindex>();

  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() onFocus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
  @Output() onBlur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
}
