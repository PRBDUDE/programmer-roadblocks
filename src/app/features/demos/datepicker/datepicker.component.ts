import { Component } from '@angular/core';
import {BasicDatepickerComponent} from "./basic-datepicker/basic-datepicker.component";
import {PrimengDatepickerComponent} from "./primeng-datepicker/primeng-datepicker.component";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'prb-datepicker',
  imports: [
    BasicDatepickerComponent,
    PrimengDatepickerComponent,
    DatePipe
  ],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
})
export class DatepickerComponent {
  protected selectedBasicDate: Date | undefined;
  protected selectedPrimengDate: Date | undefined;

  protected onBasicDateChange($event: Date) {
    this.selectedBasicDate = $event;
  }

  protected onPrimengDateChange($event: Date) {
    this.selectedPrimengDate = $event;
  }
}
