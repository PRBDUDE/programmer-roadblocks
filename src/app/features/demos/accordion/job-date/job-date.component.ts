import {Component, input} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'prb-job-date',
  imports: [
    DatePipe
  ],
  templateUrl: './job-date.component.html',
  styleUrl: '../accordion.component.scss'
})
export class JobDateComponent {
  dateType = input<string>('')
  date = input<Date>()
}
