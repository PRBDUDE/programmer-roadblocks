import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Select, SelectChangeEvent} from "primeng/select";
import {FormsModule} from "@angular/forms";

let uniqueId = 0;

@Component({
  selector: 'prb-basic-datepicker',
  imports: [
    Select,
    FormsModule
  ],
  providers: [
    {
      provide: 'uniqueId',
      useValue: () => uniqueId++
    }
  ],
  templateUrl: './basic-datepicker.component.html',
  styleUrl: './basic-datepicker.component.scss',
})
export class BasicDatepickerComponent implements OnInit {
  @Output() outDate = new EventEmitter<Date>();
  protected _rfInputIdYear = `input_year_${uniqueId++}`;
  protected _rfInputIdMonth = `input_month_${uniqueId++}`;
  protected _rfInputIdDay = `input_day_${uniqueId++}`;
  protected months = [
    {name: 'January', code: 0},
    {name: 'February', code: 1},
    {name: 'March', code: 2},
    {name: 'April', code: 3},
    {name: 'May', code: 4},
    {name: 'June', code: 5},
    {name: 'July', code: 6},
    {name: 'August', code: 7},
    {name: 'September', code: 8},
    {name: 'October', code: 9},
    {name: 'November', code: 10},
    {name: 'December', code: 11},
  ];
  protected selectedMonth: any;
  protected years: any[] | null | undefined;
  protected selectedYear: any;
  protected days: any[] | null | undefined;
  protected selectedDay: any;

  ngOnInit(): void {
    this.years = [];
    for (let year = new Date().getFullYear().valueOf(); year >= 1900; year--) {
      this.years.push(year);
    }
  }

  protected onMonthChange($event: SelectChangeEvent) {
    console.log('Month: ', $event.value?.name, ' Code: ', $event.value?.code, '')
    if ($event.value) {
      this.days = [];
      for (let day = 1; day <= new Date(this.selectedYear, (this.selectedMonth.code + 1), 0).getDate(); day++) {
        this.days.push(day);
      }
    }
  }

  protected onDayChange($event: SelectChangeEvent) {
    if (this.selectedMonth && this.selectedYear) {
      const date = new Date(this.selectedYear, this.selectedMonth.code, $event.value);
      this.outDate.emit(date);
    }
  }

  protected onYearChange() {
    this.selectedMonth = undefined;
    this.selectedDay = undefined;
    this.outDate.emit(undefined);
  }
}
