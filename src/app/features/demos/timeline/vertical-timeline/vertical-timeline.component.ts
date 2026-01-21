import {Component} from '@angular/core';
import {Timeline} from 'primeng/timeline';
import {DatePipe} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {timelineData} from "../timeline-data";
import {TimelineAlignmentItem} from "../module/timeline-alignment-item";
import {TimelineCore} from "../timeline-core";
import {TimelineOptionsComponent} from "../timeline-options/timeline-options.component";
import {DebugOutputCardComponent} from "@utility/debug-output-card.component";
import {isPrbMode, prbModes} from "@utility/prb-mode";
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'prb-vertical-timeline',
  imports: [
    Timeline,
    DatePipe,
    FormsModule,
    TimelineOptionsComponent,
    DebugOutputCardComponent,
    CardComponent
  ],
  templateUrl: './vertical-timeline.component.html',
  styleUrl: './vertical-timeline.component.scss'
})
export class VerticalTimelineComponent extends TimelineCore {
  constructor() {
    super();
    this.selectedAlignmentItem.set('left');
    this.alignmentItems.set([
      {label: 'Default (Left) Alignment', value: 'left'},
      {label: 'Alternate Alignment', value: 'alternate'},
      {label: 'Right Alignment', value: 'right'}] as TimelineAlignmentItem[]);
    this.timelineItems.set(timelineData());
  }

  protected readonly isMode = isPrbMode;
  protected readonly prbModes = prbModes;
}
