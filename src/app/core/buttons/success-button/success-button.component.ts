import {Component} from '@angular/core';
import {Button} from "primeng/button";
import {CoreButton} from "@buttons/core-button";

@Component({
  selector: 'prb-success-button',
  imports: [
    Button
  ],
  templateUrl: './success-button.component.html',
  styleUrl: './success-button.component.scss',
  host: {
    '[attr.data-button-type]': '"success"',
    '[attr.tabindex]': 'tabindex()'
  }
})
export class SuccessButtonComponent extends CoreButton {

}
