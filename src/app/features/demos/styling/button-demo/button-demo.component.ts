import {Component} from '@angular/core';
import {Button} from "primeng/button";
import {ToggleSwitch} from "primeng/toggleswitch";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'prb-button-demo',
  imports: [
    Button,
    ToggleSwitch,
    FormsModule
  ],
  templateUrl: './button-demo.component.html',
  styleUrl: './button-demo.component.scss'
})
export class ButtonDemoComponent {
  raised: boolean = false;
}
