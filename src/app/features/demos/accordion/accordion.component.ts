import {Component, inject, OnInit, signal} from '@angular/core';
import {AccordionModule} from "primeng/accordion";
import {AccordionOptionsComponent} from "./accordion-options/accordion-options.component";
import {JobService} from "@services/job.service";
import {JobStatusRecord} from "@model/job-status";
import {JobHeaderComponent} from "./job-header/job-header.component";
import {JobStatusComponent} from "./job-status/job-status.component";
import {JobDateComponent} from "./job-date/job-date.component";

@Component({
  selector: 'prb-accordion',
  imports: [
    AccordionModule,
    AccordionOptionsComponent,
    JobHeaderComponent,
    JobStatusComponent,
    JobDateComponent
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent implements OnInit {
  private jobService = inject(JobService);
  multiple = signal<boolean>(false);
  disableOne = signal<boolean>(false);
  disableTwo = signal<boolean>(false);
  disableThree = signal<boolean>(false);

  panels: JobStatusRecord[] = [];

  ngOnInit(): void {
    this.jobService.getAll().subscribe(jobs => {
      this.panels = [...jobs].sort((a, b) =>
        a.job.name.localeCompare(b.job.name, undefined, { numeric: true, sensitivity: 'base' })
      );
    })
  }

  removeJob(id: number) {
    this.jobService.delete(id).subscribe(
      () => {
        this.panels = this.panels.filter(job => job.id !== id);
      }
    )
  }
}
