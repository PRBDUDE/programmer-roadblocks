import { Component } from '@angular/core';
import {Timeline} from 'primeng/timeline';
import {DatePipe} from '@angular/common';

interface EventItem {
    status: string;
    date: string;
    icon: string;
    color: string;
}

@Component({
  selector: 'prb-vertical-timeline',
  imports: [
    Timeline,
    DatePipe
  ],
  templateUrl: './vertical-timeline.component.html',
  styleUrl: './vertical-timeline.component.scss'
})
export class VerticalTimelineComponent {
  timelineItems: EventItem[] | undefined;

  constructor() {
    this.timelineItems = [
      {
        status: 'Initiate Transmission',
        date: '2024-10-16 08:35:21.453',
        icon: 'pi pi-info-circle',
        color: '#007bff'
      },
      {
        status: 'Transmitting 3 packets',
        date: '2024-10-16 08:35:21.453',
        icon: 'pi pi-info-circle',
        color: '#007bff'
      },
      {
        status: 'Transmitting 2 packets',
        date: '2024-10-16 08:35:21.453',
        icon: 'pi pi-info-circle',
        color: '#007bff'
      },
      {
        status: 'Transmitting 8 packets',
        date: '2024-10-16 08:35:21.453',
        icon: 'pi pi-info-circle',
        color: '#007bff'
      },
      {
        status: 'Validation Received',
        date: '2024-10-16 08:35:21.453',
        icon: 'fa fa-check',
        color: '#04b404'
      },
      {
        status: 'End Transmission',
        date: '2024-10-16 08:35:21.453',
        icon: 'fa fa-download',
        color: '#04b404'
      }
    ];
  }

}
