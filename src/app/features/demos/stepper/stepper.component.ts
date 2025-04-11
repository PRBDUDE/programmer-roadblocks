import {Component, signal} from '@angular/core';
import {Step, StepList, StepPanel, StepPanels, Stepper} from "primeng/stepper";
import {Button} from "primeng/button";
import {StepperFourComponent} from "./stepper-four/stepper-four.component";
import {StepperThreeComponent} from "./stepper-three/stepper-three.component";
import {StepperTwoComponent} from "./stepper-two/stepper-two.component";
import {FormsModule} from "@angular/forms";
import {ToggleSwitch} from "primeng/toggleswitch";
import {DebugOutputCardComponent} from "@utility/debug-output-card.component";
import {isDebugMode} from "@utility/is-debug-mode";
import {StepperOneComponent} from "./stepper-one/stepper-one.component";

@Component({
  selector: 'prb-stepper',
  imports: [
    Stepper,
    StepList,
    Step,
    StepPanels,
    StepPanel,
    Button,
    StepperOneComponent,
    StepperTwoComponent,
    StepperThreeComponent,
    StepperFourComponent,
    FormsModule,
    ToggleSwitch,
    DebugOutputCardComponent
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  protected readonly isDebugMode = isDebugMode;

  inline = signal<boolean>(false);
}
