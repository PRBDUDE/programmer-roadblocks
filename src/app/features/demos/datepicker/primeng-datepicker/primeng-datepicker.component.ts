import {Component, EventEmitter, Output} from '@angular/core';
import {DatePicker} from "primeng/datepicker";
import {FormsModule} from "@angular/forms";

let uniqueId = 0;

@Component({
  selector: 'prb-primeng-datepicker',
  imports: [
    DatePicker,
    FormsModule
  ],
  providers: [
    {
      provide: 'uniqueId',
      useValue: () => uniqueId++
    }
  ],
  templateUrl: './primeng-datepicker.component.html',
  styleUrl: './primeng-datepicker.component.scss',
})
export class PrimengDatepickerComponent {
  protected selectedDate: Date | undefined;
  protected _rfInputId = `form_input_date_${uniqueId++}`;
  @Output() outDate = new EventEmitter<Date>();

  protected onClose() {
    this.outDate.emit(this.selectedDate);
  }
}
