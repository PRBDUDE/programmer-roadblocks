import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-css-property-name',
    imports: [],
    templateUrl: './css-property-name.component.html',
    styleUrl: './css-property-name.component.scss'
})
export class CssPropertyNameComponent {
  @Input() property: string = '';
}
