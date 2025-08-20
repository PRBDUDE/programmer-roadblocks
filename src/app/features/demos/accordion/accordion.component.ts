import {Component, signal} from '@angular/core';
import {AccordionModule} from "primeng/accordion";
import {AccordionOptionsComponent} from "./accordion-options/accordion-options.component";

@Component({
  selector: 'prb-accordion',
  imports: [
    AccordionModule,
    AccordionOptionsComponent
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  multiple = signal<boolean>(false);
  disableOne = signal<boolean>(false);
  disableTwo = signal<boolean>(false);
  disableThree = signal<boolean>(false);
}
