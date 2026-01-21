import {Component, input} from '@angular/core';
import {Card} from "primeng/card";
import {DatePipe} from "@angular/common";
import {TimelineEventItem} from "../../module/timeline-event-item";
import {CardHeaderComponent} from "../../card-header/card-header.component";

@Component({
  selector: 'prb-card',
  imports: [
    Card,
    DatePipe,
    CardHeaderComponent
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss',
    '../horizontal-timeline.component.scss']
})
export class CardComponent {
  eventItem = input.required<TimelineEventItem>();
}
