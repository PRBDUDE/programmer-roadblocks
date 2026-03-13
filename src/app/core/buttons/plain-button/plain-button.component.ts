import {Component} from '@angular/core';
import {Button} from "primeng/button";
import {CoreButton} from "@buttons/core-button";

@Component({
  selector: 'prb-plain-button',
  imports: [
    Button
  ],
  templateUrl: './plain-button.component.html',
  styleUrl: './plain-button.component.scss',
  host: {
    '[attr.data-button-type]': '"plain"',
    '[attr.tabindex]': 'tabindex()'
  }
})
export class PlainButtonComponent extends CoreButton {

  plainButton = {
    colorScheme: {
      light: {
        root: {
          primary: {
            'background': '{gray-100}',
            'hoverBackground': '{gray-50}',
            'borderColor': '{gray-300}',
            'hoverBorderColor': '{gray-200}',
            'color': '{gray-700}',
            'hoverColor': '{gray-500}',
            "focusRing": {
              "color": "{gray-500}",
              "shadow": "0 0 0 0.2rem rgba(13,110,253,.25)"
            }
          }
        }
      },
      dark: {
        root: {
          primary: {
            'background': '{gray-300}',
            'hoverBackground': '{gray-200}',
            'borderColor': '{gray-500}',
            'hoverBorderColor': '{gray-400}',
            'color': '{gray-900}',
            'hoverColor': '{gray-900}',
            "focusRing": {
              "color": "{gray-500}",
              "shadow": "0 0 0 0.2rem rgba(13,110,253,.25)"
            }
          }
        }
      }
    }
  }
}
