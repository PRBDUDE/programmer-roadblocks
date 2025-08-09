import {Component} from '@angular/core';
import {Timeline} from 'primeng/timeline';
import {DatePipe, NgClass} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {Card} from "primeng/card";
import {timelineData} from "../timeline-data";
import {TimelineAlignmentItem} from "../module/timeline-alignment-item";
import {TimelineCore} from "../timeline-core";
import {TimelineOptionsComponent} from "../timeline-options/timeline-options.component";
import {DebugOutputCardComponent} from "@utility/debug-output-card.component";
import {isPrbMode, prbModes} from "@utility/is-prb-mode";

@Component({
  selector: 'prb-horizontal-timeline',
  imports: [
    Timeline,
    DatePipe,
    FormsModule,
    Card,
    NgClass,
    TimelineOptionsComponent,
    DebugOutputCardComponent
  ],
  templateUrl: './horizontal-timeline.component.html',
  styleUrl: './horizontal-timeline.component.scss'
})
export class HorizontalTimelineComponent extends TimelineCore {
  constructor() {
    super();
    this.selectedAlignmentItem.set('top');
    this.alignmentItems.set([
      {label: 'Default (Top) Alignment', value: 'top'},
      {label: 'Alternate Alignment', value: 'alternate'},
      {label: 'Bottom Alignment', value: 'bottom'}] as TimelineAlignmentItem[]);
    this.timelineItems.set(timelineData());
  }

  protected readonly isMode = isPrbMode;
  protected readonly prbModes = prbModes;
}
