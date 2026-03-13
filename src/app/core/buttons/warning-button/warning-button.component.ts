import {Component} from '@angular/core';
import {Button} from "primeng/button";
import {CoreButton} from "@buttons/core-button";

@Component({
  selector: 'prb-warning-button',
  imports: [
    Button
  ],
  templateUrl: './warning-button.component.html',
  styleUrl: './warning-button.component.scss',
  host: {
    '[attr.data-button-type]': '"warning"',
    '[attr.tabindex]': 'tabindex()'
  }
})
export class WarningButtonComponent extends CoreButton {

}
