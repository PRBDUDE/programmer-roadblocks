import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-css-property-value',
    imports: [],
    templateUrl: './css-property-value.component.html',
    styleUrl: './css-property-value.component.scss'
})
export class CssPropertyValueComponent {
  @Input() value: string = '';
}
