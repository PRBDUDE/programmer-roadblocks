import {Component} from '@angular/core';
import {Button} from "primeng/button";
import {CoreButton} from "@buttons/core-button";

@Component({
  selector: 'prb-tertiary-button',
  imports: [
    Button
  ],
  templateUrl: './tertiary-button.component.html',
  styleUrl: './tertiary-button.component.scss',
  host: {
    '[attr.data-button-type]': '"tertiary"',
    '[attr.tabindex]': '"0"'
  }
})
export class TertiaryButtonComponent extends CoreButton {

}
