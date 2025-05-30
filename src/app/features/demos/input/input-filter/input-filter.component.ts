import {Component} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {InputMaskModule} from "primeng/inputmask";
import {PhoneNumberFilter} from "@filters/phone-number-filter";
import {SsnFilter} from "@filters/ssn-filter";
import {VinFilter} from "@filters/vin-filter";
import {EmailFilter} from "@filters/email-filter";
import {InputErrorComponent} from "@errorHandlers/input-error.component";
import {isDebugMode} from "@utility/is-debug-mode";
import {DebugOutputCardComponent} from "@utility/debug-output-card.component";

@Component({
    selector: 'prb-input-filter',
  imports: [
    InputTextModule,
    FormsModule,
    InputMaskModule,
    InputErrorComponent,
    InputErrorComponent,
    DebugOutputCardComponent
  ],
    templateUrl: './input-filter.component.html',
    styleUrl: './input-filter.component.scss'
})
export class InputFilterComponent {
  protected readonly isDebugMode = isDebugMode;

  phoneNumber: PhoneNumberFilter = new PhoneNumberFilter();
  ssn: SsnFilter = new SsnFilter();
  vin: VinFilter = new VinFilter();
  email: EmailFilter = new EmailFilter();
}
