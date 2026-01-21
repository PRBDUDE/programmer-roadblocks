import {Component, input} from '@angular/core';
import {Card} from "primeng/card";
import {DatePipe} from "@angular/common";
import {TimelineEventItem} from "../../module/timeline-event-item";

@Component({
  selector: 'prb-card',
  imports: [
    DatePipe,
    Card
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss',
    '../vertical-timeline.component.scss']
})
export class CardComponent {
  eventItem = input<TimelineEventItem>();
}
