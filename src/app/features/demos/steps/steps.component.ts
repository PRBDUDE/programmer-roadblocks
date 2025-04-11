import {Component, signal} from '@angular/core';
import {Steps} from "primeng/steps";
import {MenuItem} from "primeng/api";
import {NgIf} from "@angular/common";
import {StepsOneComponent} from "./steps-one/steps-one.component";
import {StepsTwoComponent} from "./steps-two/steps-two.component";
import {StepsThreeComponent} from "./steps-three/steps-three.component";
import {StepsFourComponent} from "./steps-four/steps-four.component";
import {Button} from "primeng/button";
import {ToggleSwitch} from "primeng/toggleswitch";
import {FormsModule} from "@angular/forms";
import {DebugOutputCardComponent} from "@utility/debug-output-card.component";
import {isDebugMode} from "@utility/is-debug-mode";

@Component({
  selector: 'prb-steps',
  imports: [
    Steps,
    NgIf,
    StepsOneComponent,
    StepsTwoComponent,
    StepsThreeComponent,
    StepsFourComponent,
    Button,
    ToggleSwitch,
    FormsModule,
    DebugOutputCardComponent
  ],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent {
  protected readonly isDebugMode = isDebugMode;
  steps = [
    {
      label: 'Initial',
      icon: 'fa fa-check'
    },
    {
      label: 'Gather Information',
      icon: 'fa fa-check'
    },
    {
      label: 'Enter Information',
      icon: 'fa fa-check'
    },
    {
      label: 'Submit',
      icon: 'fa fa-check'
    }
  ] as MenuItem[];
  activeIndex: number = 0;
  inline = signal<boolean>(false);

  prev() {
    this.activeIndex--;
  }

  next() {
    this.activeIndex++;
  }

  onActiveIndexChange($event: number) {
    console.log("onActiveIndexChange", $event);
    this.activeIndex = $event;
  }
}
