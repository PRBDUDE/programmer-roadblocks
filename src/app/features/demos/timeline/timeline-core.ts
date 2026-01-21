import {TimelineEventItem} from "./module/timeline-event-item";
import {TimelineAlignmentItem} from "./module/timeline-alignment-item";
import {signal} from "@angular/core";

export class TimelineCore {
  timelineItems = signal<TimelineEventItem[]>([]);
  selectedAlignmentItem = signal<string>('');
  alignmentItems = signal<TimelineAlignmentItem[]>([]);
  showMinimal = signal<boolean>(true);
  showIcon = signal<boolean>(true);
  showDateTime = signal<boolean>(true);
  showCardWithDetails = signal<boolean>(true);
}
