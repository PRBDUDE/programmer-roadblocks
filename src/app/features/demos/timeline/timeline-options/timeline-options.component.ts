import {Component, input, Input, model} from '@angular/core';
import {Checkbox} from "primeng/checkbox";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {TimelineAlignmentItem} from "../module/timeline-alignment-item";

@Component({
  selector: 'prb-timeline-options',
  imports: [
    Checkbox,
    DropdownModule,
    FormsModule,
  ],
  templateUrl: './timeline-options.component.html',
  styleUrl: './timeline-options.component.scss'
})
export class TimelineOptionsComponent {
  alignmentItems = input<TimelineAlignmentItem[]>();
  selectedAlignmentItem = model<string>();
  showMinimal = model<boolean>(true);
  showAddIcon = model<boolean>(true);
  showAddDateTime = model<boolean>(true);
  showCardWithDetails = model<boolean>(true);
}
