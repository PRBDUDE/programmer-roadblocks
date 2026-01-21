import {Component, input} from '@angular/core';
import {Card} from "primeng/card";
import {TimelineEventItem} from "../module/timeline-event-item";
import {CardHeaderComponent} from "../card-header/card-header.component";
import {CardBodyComponent} from "../card-body/card-body.component";

@Component({
  selector: 'prb-card',
  imports: [
    Card,
    CardHeaderComponent,
    CardBodyComponent
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss',
    '../horizontal-timeline/horizontal-timeline.component.scss']
})
export class CardComponent {
  eventItem = input.required<TimelineEventItem>();
}
