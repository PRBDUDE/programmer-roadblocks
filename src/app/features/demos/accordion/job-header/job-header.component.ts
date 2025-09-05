import {Component, input, output} from '@angular/core';
import {ProgressBar} from "primeng/progressbar";
import {JobStatus} from "@model/job-status";

@Component({
  selector: 'prb-job-header',
  imports: [
    ProgressBar
  ],
  templateUrl: './job-header.component.html',
  styleUrl: '../accordion.component.scss'
})
export class JobHeaderComponent {
  job = input<JobStatus>();
  removed = output<void>();

  delete($event: MouseEvent) {
    $event.stopPropagation();
    console.log('delete: ', $event)
    this.removed.emit();
  }
}
