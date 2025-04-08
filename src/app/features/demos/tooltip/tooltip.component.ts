import {Component, signal} from '@angular/core';
import {Tooltip} from "primeng/tooltip";
import {Button} from "primeng/button";

@Component({
  selector: 'prb-tooltip',
  imports: [
    Tooltip,
    Button
  ],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {

  counter = signal<number>(0);

  protected readonly Tooltip = Tooltip;

  clickCounter() {
    this.counter.update(c => c + 1);
  }
}
