import {Component} from '@angular/core';
import {Button} from "primeng/button";
import {CoreButton} from "@buttons/core-button";

@Component({
  selector: 'prb-danger-button',
  imports: [
    Button
  ],
  templateUrl: './danger-button.component.html',
  styleUrl: './danger-button.component.scss',
  host: {
    '[attr.data-button-type]': '"danger"',
    '[attr.tabindex]': 'tabindex()'
  }
})
export class DangerButtonComponent extends CoreButton {

}
