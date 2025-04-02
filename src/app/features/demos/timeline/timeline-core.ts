import {TimelineEventItem} from "./module/timeline-event-item";
import {TimelineAlignmentItem} from "./module/timeline-alignment-item";
import {signal} from "@angular/core";

export class TimelineCore {
  timelineItems = signal<TimelineEventItem[]>([]);
  selectedAlignmentItem = signal<string>('');
  alignmentItems = signal<TimelineAlignmentItem[]>([]);
  showMinimal = signal<boolean>(true);
  showAddIcon = signal<boolean>(true);
  showAddDateTime = signal<boolean>(true);
  showCardWithDetails = signal<boolean>(true);

  getEventClass(event: TimelineEventItem): string {
    if (event.status === 'Initiate Transmission') {
      return 'tl-initiate';
    } else if (event.status === 'Transmitting Packets') {
      return 'tl-transmitting';
    } else if (event.status === 'Verify Checksum') {
      return 'tl-checksum';
    } else if (event.status === 'End Transmission') {
      return 'tl-complete';
    } else if (event.status === 'Warning') {
      return 'tl-warning';
    } else if (event.status === 'Error') {
      return 'tl-error';
    }
    return 'tl-unknown';
  }

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
