import {Component, input} from '@angular/core';

@Component({
  selector: 'prb-card-header',
  imports: [],
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss'
})
export class CardHeaderComponent {
  status = input.required<string>();
}
