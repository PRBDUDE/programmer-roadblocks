import {Component, input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {TimelineEventItem} from "../module/timeline-event-item";

@Component({
  selector: 'prb-card-body',
    imports: [
        DatePipe
    ],
  templateUrl: './card-body.component.html',
  styleUrl: './card-body.component.scss',
})
export class CardBodyComponent {
  data = input.required<TimelineEventItem>();
}
