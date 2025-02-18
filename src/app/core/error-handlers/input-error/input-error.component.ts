import {Component, Input} from '@angular/core';
import {BaseFilterType} from "@filters/base-filter-type";

@Component({
    selector: 'app-input-error',
  imports: [],
    templateUrl: './input-error.component.html',
    styleUrl: './input-error.component.scss'
})
export class InputErrorComponent {
  @Input() errorComponent?: BaseFilterType;
}
