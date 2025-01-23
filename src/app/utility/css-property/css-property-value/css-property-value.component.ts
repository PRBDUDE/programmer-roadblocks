import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-css-property-value',
  standalone: true,
  imports: [],
  templateUrl: './css-property-value.component.html',
  styleUrl: './css-property-value.component.scss'
})
export class CssPropertyValueComponent {
  @Input() value: string = '';
}
