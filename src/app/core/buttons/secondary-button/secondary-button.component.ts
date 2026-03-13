import {Component} from '@angular/core';
import {Button} from "primeng/button";
import {CoreButton} from "@buttons/core-button";

@Component({
  selector: 'prb-secondary-button',
  imports: [
    Button
  ],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.scss',
  host: {
    '[attr.data-button-type]': '"secondary"',
    '[attr.tabindex]': 'tabindex()'
  }
})
export class SecondaryButtonComponent extends CoreButton {

}
