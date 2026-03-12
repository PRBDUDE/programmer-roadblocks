import {Component} from '@angular/core';
import {ToggleSwitch} from "primeng/toggleswitch";
import {FormsModule} from "@angular/forms";
import {ButtonCardComponent} from "./button-card/button-card.component";
import {PlainButtonComponent} from "@buttons/plain-button/plain-button.component";
import {PrimaryButtonComponent} from "@buttons/primary-button/primary-button.component";
import {SecondaryButtonComponent} from "@buttons/secondary-button/secondary-button.component";
import {TertiaryButtonComponent} from "@buttons/tertiary-button/tertiary-button.component";
import {DangerButtonComponent} from "@buttons/danger-button/danger-button.component";
import {SuccessButtonComponent} from "@buttons/success-button/success-button.component";
import {InformationButtonComponent} from "@buttons/information-button/information-button.component";
import {WarningButtonComponent} from "@buttons/warning-button/warning-button.component";
import {HelpButtonComponent} from "@buttons/help-button/help-button.component";
import {ContrastButtonComponent} from "@buttons/contrast-button/contrast-button.component";

@Component({
  selector: 'prb-button-demo',
  imports: [
    ToggleSwitch,
    FormsModule,
    ButtonCardComponent,
    PlainButtonComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    TertiaryButtonComponent,
    DangerButtonComponent,
    SuccessButtonComponent,
    InformationButtonComponent,
    WarningButtonComponent,
    HelpButtonComponent,
    ContrastButtonComponent
  ],
  templateUrl: './button-demo.component.html',
  styleUrl: './button-demo.component.scss'
})
export class ButtonDemoComponent {
  raised: boolean = false;
  disabled: boolean = false;
  rounded: boolean = false;
}
