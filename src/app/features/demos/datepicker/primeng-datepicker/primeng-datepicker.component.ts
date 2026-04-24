import {Component, EventEmitter, Output} from '@angular/core';
import {DatePicker} from "primeng/datepicker";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'prb-primeng-datepicker',
  imports: [
    DatePicker,
    FormsModule
  ],
  templateUrl: './primeng-datepicker.component.html',
  styleUrl: './primeng-datepicker.component.scss',
})
export class PrimengDatepickerComponent {
  protected selectedDate: Date | undefined;
  @Output() outDate = new EventEmitter<Date>();

  protected onClose() {
    console.log('onClose - selectedDate: ', this.selectedDate);
    this.outDate.emit(this.selectedDate);
  }
}
