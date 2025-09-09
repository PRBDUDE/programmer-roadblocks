import {Component, input} from '@angular/core';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from "primeng/accordion";

@Component({
  selector: 'prb-static-accordion',
  imports: [
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
    Accordion
  ],
  templateUrl: './static-accordion.component.html',
  styleUrl: '../accordion.component.scss'
})
export class StaticAccordionComponent {
  multiple = input<boolean>(false);
}
