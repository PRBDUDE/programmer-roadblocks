import {Component, input} from '@angular/core';

@Component({
  selector: 'prb-copyright',
  imports: [],
  template: `
    {{ copyrightHolder() }} &copy; {{ year }}
  `,
  styleUrls: [
    '../roadblock-footer.component.scss',
    './copyright.component.scss'
  ]
})
export class CopyrightComponent {
  copyrightHolder = input<string>('Programmer Roadblocks');
  year = new Date().getFullYear();
}
