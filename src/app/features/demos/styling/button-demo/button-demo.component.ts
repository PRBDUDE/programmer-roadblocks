import {Component} from '@angular/core';
import {ToggleSwitch} from "primeng/toggleswitch";
import {FormsModule} from "@angular/forms";
import {ButtonCardComponent} from "./button-card/button-card.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'prb-button-demo',
  imports: [
    ToggleSwitch,
    FormsModule,
    ButtonCardComponent,
    NgClass
  ],
  templateUrl: './button-demo.component.html',
  styleUrl: './button-demo.component.scss'
})
export class ButtonDemoComponent {
  raised: boolean = false;
  disabled: boolean = false;
  rounded: boolean = false;
}
