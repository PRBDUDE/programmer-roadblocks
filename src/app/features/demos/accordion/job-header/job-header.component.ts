import {Component, input} from '@angular/core';
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
}
