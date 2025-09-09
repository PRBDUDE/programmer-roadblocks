import {Component, inject, input, OnInit} from '@angular/core';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from "primeng/accordion";
import {JobDateComponent} from "./job-date/job-date.component";
import {JobHeaderComponent} from "./job-header/job-header.component";
import {JobStatusComponent} from "./job-status/job-status.component";
import {JobStatusRecord} from "@model/job-status";
import {JobService} from "@services/job.service";

@Component({
  selector: 'prb-job-accordion',
  imports: [
    Accordion,
    AccordionContent,
    AccordionHeader,
    AccordionPanel,
    JobDateComponent,
    JobHeaderComponent,
    JobStatusComponent
  ],
  templateUrl: './job-accordion.component.html',
  styleUrl: '../accordion.component.scss'
})
export class JobAccordionComponent implements OnInit {
  private jobService = inject(JobService);
  multiple = input<boolean>(false);

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
