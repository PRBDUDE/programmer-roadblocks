import {Component} from '@angular/core';
import {Timeline} from 'primeng/timeline';
import {DatePipe, NgClass} from '@angular/common';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {Card} from "primeng/card";
import {timelineData} from "../timeline-data";
import {TimelineAlignmentItem} from "../module/timeline-alignment-item";
import {TimelineCore} from "../timeline-core";
import {TimelineOptionsComponent} from "../timeline-options/timeline-options.component";
import {DebugOutputCardComponent} from "@utility/debug-output-card.component";
import {isDebugMode} from "@utility/is-debug-mode";

@Component({
  selector: 'prb-horizontal-timeline',
  imports: [
    Timeline,
    DatePipe,
    DropdownModule,
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

  protected readonly isDebugMode = isDebugMode;

  constructor() {
    super();
    this.selectedAlignmentItem.set('top');
    this.alignmentItems.set([
      {label: 'Default (Top) Alignment', value: 'top'},
      {label: 'Alternate Alignment', value: 'alternate'},
      {label: 'Bottom Alignment', value: 'bottom'}] as TimelineAlignmentItem[]);
    this.timelineItems.set(timelineData());
  }
}
