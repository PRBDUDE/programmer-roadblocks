import {Component} from '@angular/core';
import {Button} from "primeng/button";
import {CoreButton} from "@buttons/core-button";

@Component({
  selector: 'prb-information-button',
  imports: [
    Button
  ],
  templateUrl: './information-button.component.html',
  styleUrl: './information-button.component.scss',
  host: {
    '[attr.data-button-type]': '"information"',
    '[attr.tabindex]': 'tabindex()'
  }
})
export class InformationButtonComponent extends CoreButton {

}
