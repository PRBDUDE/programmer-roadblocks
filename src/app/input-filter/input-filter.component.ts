import {Component} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {InputMaskModule} from "primeng/inputmask";
import {PhoneNumberFilter} from "../filter-types/phone-number-filter";
import {SsnFilter} from "../filter-types/ssn-filter";
import {VinFilter} from "../filter-types/vin-filter";
import {EmailFilter} from "../filter-types/email-filter";
import {InputErrorComponent} from "../input-error/input-error.component";

@Component({
    selector: 'app-input-filter',
    imports: [
        InputTextModule,
        FormsModule,
        InputMaskModule,
        InputErrorComponent
    ],
    templateUrl: './input-filter.component.html',
    styleUrl: './input-filter.component.scss'
})
export class InputFilterComponent {
  phoneNumber: PhoneNumberFilter = new PhoneNumberFilter();
  ssn: SsnFilter = new SsnFilter();
  vin: VinFilter = new VinFilter();
  email: EmailFilter = new EmailFilter();
}
