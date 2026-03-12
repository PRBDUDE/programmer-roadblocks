import {Component, input, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'prb-button-card',
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './button-card.component.html',
  styleUrl: '../button-demo.component.scss'
})
export class ButtonCardComponent {
  comment = input<TemplateRef<any>>();
  large = input<TemplateRef<any>>();
  small = input<TemplateRef<any>>();
}
