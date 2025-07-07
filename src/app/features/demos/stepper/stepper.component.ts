import {Component, signal} from '@angular/core';
import {Step, StepList, StepPanel, StepPanels, Stepper} from "primeng/stepper";
import {Button} from "primeng/button";
import {StepperFourComponent} from "./stepper-four/stepper-four.component";
import {StepperThreeComponent} from "./stepper-three/stepper-three.component";
import {StepperTwoComponent} from "./stepper-two/stepper-two.component";
import {FormsModule} from "@angular/forms";
import {ToggleSwitch} from "primeng/toggleswitch";
import {DebugOutputCardComponent} from "@utility/debug-output-card.component";
import {StepperOneComponent} from "./stepper-one/stepper-one.component";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {isPrbMode, prbModes} from "@utility/is-prb-mode";

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
  styleUrl: './stepper.component.scss',
  animations: [
    trigger('content', [
      state('hidden', style({height: '0', visibility: 'hidden'})),
      state('visible', style({height: '*', visibility: 'visible'})),
      transition('visible <=> hidden', [animate('250ms cubic-bezier(0.86, 0, 0.07, 1)'),]),
      transition('void => *', [animate(0)])
    ])
  ]
})
export class StepperComponent {
  inline = signal<boolean>(false);
  protected readonly isMode = isPrbMode;
  protected readonly prbModes = prbModes;
}
