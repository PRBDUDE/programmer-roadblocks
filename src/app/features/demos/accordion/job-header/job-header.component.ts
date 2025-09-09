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
    // Prevent the click event from propagating to the parent
    $event.stopPropagation();
    // Emit only if the job is complete
    if (this.job()?.end) {
      this.removed.emit();
    }
  }
}
