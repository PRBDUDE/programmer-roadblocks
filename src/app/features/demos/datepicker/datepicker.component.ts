import { Component } from '@angular/core';
import {BasicDatepickerComponent} from "./basic-datepicker/basic-datepicker.component";
import {PrimengDatepickerComponent} from "./primeng-datepicker/primeng-datepicker.component";
import {DatePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'prb-datepicker',
  imports: [
    BasicDatepickerComponent,
    PrimengDatepickerComponent,
    DatePipe,
    FormsModule
  ],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
})
export class DatepickerComponent {
  protected selectedBasicDate: Date | undefined;
  protected selectedPrimengDate: Date | undefined;
  protected selectedHtmlDate: Date | undefined;

  protected onBasicDateChange($event: Date) {
    this.selectedBasicDate = $event;
  }

  protected onPrimengDateChange($event: Date) {
    this.selectedPrimengDate = $event;
  }
}
