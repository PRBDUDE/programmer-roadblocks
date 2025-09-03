import {Component, input} from '@angular/core';
import {Tag} from "primeng/tag";
import {JobStatus} from "@model/job-status";

@Component({
  selector: 'prb-job-status',
  imports: [
    Tag
  ],
  templateUrl: './job-status.component.html',
  styleUrl: '../accordion.component.scss'
})
export class JobStatusComponent {
  status = input<string>('');
  message = input<string>('');
  job = input<JobStatus>()
}
