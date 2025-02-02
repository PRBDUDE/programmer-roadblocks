import {Component, Input} from '@angular/core';
import {BaseFilterType} from "../filter-types/base-filter-type";
import {NgForOf, NgIf} from "@angular/common";

@Component({
    selector: 'app-input-error',
    imports: [
        NgForOf,
        NgIf
    ],
    templateUrl: './input-error.component.html',
    styleUrl: './input-error.component.scss'
})
export class InputErrorComponent {
  @Input() errorComponent?: BaseFilterType;
}
