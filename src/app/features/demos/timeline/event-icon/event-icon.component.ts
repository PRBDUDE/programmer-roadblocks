import {Component, input} from '@angular/core';
import {TimelineEventItem} from "../module/timeline-event-item";

@Component({
  selector: 'prb-event-icon',
  imports: [],
  templateUrl: './event-icon.component.html',
  styleUrl: './event-icon.component.scss',
})
export class EventIconComponent {
  event = input.required<TimelineEventItem>();

  getIcon(event: TimelineEventItem): string {
    if (event.status === 'Initiate Transmission') {
      return 'pi pi-info';
    } else if (event.status === 'Transmitting Packets') {
      return 'fa fa-rss';
    } else if (event.status === 'Verify Checksum') {
      return 'fa fa-check';
    } else if (event.status === 'End Transmission') {
      return 'fa fa-download';
    } else if (event.status === 'Warning') {
      return 'fa fa-exclamation';
    } else if (event.status === 'Error') {
      return 'pi pi-exclamation-triangle';
    }
    return 'fa fa-question';
  }
}
