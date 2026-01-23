import {Component, input} from '@angular/core';

@Component({
    selector: 'prb-css-property-name',
    imports: [],
    templateUrl: './css-property-name.component.html',
    styleUrl: './css-property-name.component.scss'
})
export class CssPropertyNameComponent {
  property = input<string>('');
}
