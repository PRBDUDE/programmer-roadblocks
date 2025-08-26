import {Component, signal} from '@angular/core';
import {AccordionModule} from "primeng/accordion";
import {AccordionOptionsComponent} from "./accordion-options/accordion-options.component";
import {ProgressBar} from "primeng/progressbar";
import {Tag} from "primeng/tag";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'prb-accordion',
  imports: [
    AccordionModule,
    AccordionOptionsComponent,
    ProgressBar,
    Tag,
    DatePipe
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  multiple = signal<boolean>(false);
  disableOne = signal<boolean>(false);
  disableTwo = signal<boolean>(false);
  disableThree = signal<boolean>(false);

  panels = [
    {
      index: 0,
      disabled: false,
      job: {
        id: 'X34900',
        percentage: 100,
        status: 'completed',
        start: new Date(2025,
          3,
          14,
          20,
          31,
          53).toUTCString(),
        end: new Date(2025,
          3,
          14,
          21,
          2,
          6).toUTCString()
      },
    },
    {
      index: 1,
      disabled: false,
      job: {
        id: 'X34907',
        percentage: 100,
        status: 'completed',
        start: new Date(2025,
          3,
          15,
          19,
          45,
          5).toUTCString(),
        end: new Date(2025,
          3,
          15,
          20,
          1,
          1).toUTCString()
      }
    },
    {
      index: 2,
      disabled: false,
      job: {
        id: 'X34912',
        percentage: 95,
        status: 'error',
        error: 'Unable to connect to database',
        start: new Date(2025,
          3,
          15,
          20,
          1,
          1).toUTCString(),
        end: new Date(2025,
          3,
          15,
          20,
          30,
          1).toUTCString()
      }
    },
    {
      index: 3,
      disabled: false,
      job: {
        id: 'X34913',
        percentage: 100,
        status: 'completed',
        start: new Date(2025,
          3,
          15,
          20,
          30,
          1).toUTCString(),
        end: new Date(2025,
          3,
          15,
          20,
          59,
          9).toUTCString()
      }
    },
    {
      index: 4,
      disabled: false,
      job: {
        id: 'X34915',
        percentage: 92,
        status: 'cleanup',
        cleanup: 'Closing database connection',
        start: new Date(2025,
          3,
          15,
          20,
          59,
          9).toUTCString(),
        end: undefined
      }
    },
    {
      index: 5,
      disabled: false,
      job: {
        id: 'X34921',
        percentage: 47,
        status: 'working',
        step: 'Retrieving data from the server',
        start: new Date(2025,
          3,
          15,
          21,
          2,
          6).toUTCString(),
        end: undefined
      }
    },
    {
      index: 6,
      disabled: false,
      job: {
        id: 'X34925',
        percentage: 63,
        status: 'working',
        step: 'Reconciling data',
        start: new Date(2025,
          3,
          15,
          21,
          29,
          1).toUTCString(),
        end: undefined
      }
    },
    {
      index: 7,
      disabled: false,
      job: {
        id: 'X34927',
        percentage: 58,
        status: 'working',
        step: 'Updating database',
        start: new Date(2025,
          3,
          16,
          20,
          25,
          5).toUTCString(),
        end: undefined
      }
    },
    {
      index: 8,
      disabled: false,
      job: {
        id: 'X34931',
        percentage: 87,
        status: 'cleanup',
        cleanup: 'Deleting old data',
        start: new Date(2025,
          3,
          16,
          20,
          25,
          5).toUTCString(),
        end: undefined
      }
    }
  ];
}
