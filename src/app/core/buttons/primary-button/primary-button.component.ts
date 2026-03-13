import {Component} from '@angular/core';
import {Button} from "primeng/button";
import {CoreButton} from "@buttons/core-button";

@Component({
  selector: 'prb-primary-button',
  imports: [
    Button
  ],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
  host: {
    '[attr.data-button-type]': '"primary"',
    '[attr.tabindex]': 'tabindex()'
  }
})
export class PrimaryButtonComponent extends CoreButton {

}
