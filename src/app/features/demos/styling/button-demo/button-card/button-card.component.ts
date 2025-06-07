import {Component, input, TemplateRef} from '@angular/core';
import {Button, ButtonSeverity} from "primeng/button";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'prb-button-card',
  imports: [
    Button,
    NgTemplateOutlet
  ],
  templateUrl: './button-card.component.html',
  styleUrl: '../button-demo.component.scss'
})
export class ButtonCardComponent {
  comment = input<TemplateRef<any>>();

  label = input('Label');
  severity = input<ButtonSeverity>();
  link = input<boolean>(false);
  rounded = input(false);
  raised = input(false);
  disabled = input(false);
  icon = input<string | undefined>();
  iconPos = input<"left" | "right" | "top" | "bottom">('left');
  badge = input<string | undefined>();
  badgeSeverity = input<ButtonSeverity>();
}
