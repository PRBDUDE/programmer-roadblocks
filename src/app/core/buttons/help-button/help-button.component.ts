import {Component} from '@angular/core';
import {Button} from "primeng/button";
import {CoreButton} from "@buttons/core-button";

@Component({
  selector: 'prb-help-button',
  imports: [
    Button
  ],
  templateUrl: './help-button.component.html',
  styleUrl: './help-button.component.scss',
  host: {
    '[attr.data-button-type]': '"help"',
    '[attr.tabindex]': 'tabindex()'
  }
})
export class HelpButtonComponent extends CoreButton {

}
