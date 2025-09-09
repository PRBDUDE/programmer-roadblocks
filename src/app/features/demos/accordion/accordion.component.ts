import {Component, signal} from '@angular/core';
import {AccordionModule} from "primeng/accordion";
import {AccordionOptionsComponent} from "./accordion-options/accordion-options.component";
import {StaticAccordionComponent} from "./static-accordion/static-accordion.component";
import {JobAccordionComponent} from "./job-accordion/job-accordion.component";

@Component({
  selector: 'prb-accordion',
  imports: [
    AccordionModule,
    AccordionOptionsComponent,
    StaticAccordionComponent,
    JobAccordionComponent
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  multiple = signal<boolean>(false);
}
