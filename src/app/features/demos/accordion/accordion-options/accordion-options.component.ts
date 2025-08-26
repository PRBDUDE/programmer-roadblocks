import {Component, model} from '@angular/core';
import {Checkbox} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'prb-accordion-options',
  imports: [
    Checkbox,
    FormsModule
  ],
  templateUrl: './accordion-options.component.html',
  styleUrl: './accordion-options.component.scss'
})
export class AccordionOptionsComponent {
  multiple = model<boolean>(false);
  // disableOne = model<boolean>(false);
  // disableTwo = model<boolean>(false);
  // disableThree = model<boolean>(false);
}
