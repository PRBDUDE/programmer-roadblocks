import {Component, Input} from '@angular/core';
import {BaseFilterType} from "@filters/base-filter-type";

@Component({
    selector: 'prb-input-error',
  imports: [],
    templateUrl: './input-error.component.html',
    styleUrl: './input-error.component.scss'
})
export class InputErrorComponent {
  /**
   * Title of the box.
   */
  @Input() title!: string;
  /**
   * Filter type to display error message for.
   */
  @Input() filterType?: BaseFilterType;
}
