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
}
