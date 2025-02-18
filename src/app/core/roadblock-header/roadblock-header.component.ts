import {Component, OnInit} from '@angular/core';
import {MegaMenuModule} from "primeng/megamenu";
import {MegaMenuItem} from "primeng/api";
import {RouterLink} from "@angular/router";
import {Button} from "primeng/button";
import {isDebugMode} from "@utility/is-debug-mode";
import {Tooltip} from "primeng/tooltip";
import {isProduction} from "@utility/is-production";

@Component({
  selector: 'app-roadblock-header',
  imports: [
    MegaMenuModule,
    RouterLink,
    Button,
    Tooltip
  ],
  templateUrl: './roadblock-header.component.html',
  styleUrl: './roadblock-header.component.scss'
})
export class RoadblockHeaderComponent implements OnInit {
  protected readonly isDebugMode = isDebugMode;
  protected readonly isProduction = isProduction;

  menuItems: MegaMenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Reactive Forms',
        root: true,
        items: [
          [
            {
              label: 'Entry Form',
              items: [
                {
                  label: 'Entry Form',
                  subtext: 'Create a new entry',
                  route: '/reactive-forms/entry-form'
                }
              ]
            }
          ]
        ]
      },
      {
        label: 'Demos',
        root: true,
        items: [
          [
            {
              label: 'Input',
              items: [
                {
                  label: 'Input Filter',
                  subtext: 'Test your input fields',
                  route: '/input-filter'
                }
              ]
            },
            {
              label: 'Scrolling',
              items: [
                {
                  label: 'Scrollable Page',
                  subtext: 'Test scrollable page',
                  route: '/scrollable-page'
                }
              ]
            }
          ],
          [
            {
              label: 'Styling',
              items: [
                {
                  label: 'Color Palette',
                  subtext: 'Color palettes',
                  route: '/color-palette'
                },
                {
                  label: 'Button Styles',
                  subtext: 'Primary, Secondary and Tertiary buttons',
                  route: '/button-demo'
                },
                {
                  label: 'Message Styles',
                  subtext: 'Success, Info, Warning and Error messages',
                  route: '/message-demo'
                }
              ]
            }
          ]
        ]
      },
      {
        label: 'Documentation',
        root: true,
        items: [
          [
            {
              label: 'PrimeNG',
              items: [
                {
                  label: 'PrimeNG',
                  subtext: 'PrimeNG official documentation',
                  url: 'https://v18.primeng.org/',
                  target: '_blank'
                },
              ]
            },
            {
              label: 'Getting Started',
              items: [
                {
                  label: 'Installation',
                  subtext: 'PrimeNG Installation guide',
                  url: 'https://v18.primeng.org/installation',
                  target: '_blank'
                },
                {
                  label: 'Configuration',
                  subtext: 'PrimeNG Configuration guide',
                  url: 'https://v18.primeng.org/configuration',
                  target: '_blank'
                },
                {
                  label: 'Playground',
                  subtext: 'PrimeNG Playground',
                  url: 'https://v18.primeng.org/playground',
                  target: '_blank'
                }
              ]
            }
          ],
          [
            {
              label: 'Typescript',
              items: [
                {
                  label: 'Language Reference',
                  subtext: 'TypeScript official documentation',
                  url: 'https://www.typescriptlang.org/docs/',
                  target: '_blank'
                },
                {
                  label: 'Tutorial',
                  subtext: 'TypeScript Tutorial',
                  url: 'https://www.w3schools.com/typescript/index.php',
                  target: '_blank'
                }
              ]
            },
            {
              label: 'Node',
              items: [
                {
                  label: 'Documentation',
                  subtext: 'Node.js official documentation',
                  url: 'https://nodejs.org/docs/latest/api/',
                  target: '_blank'
                },
                {
                  label: 'Tutorial',
                  subtext: 'Angular Tutorial',
                  url: 'https://www.w3schools.com/angular/',
                  target: '_blank'
                }
              ]
            }
          ],
          [
            {
              label: 'Reactive Forms',
              items: [
                {
                  label: 'Reactive Forms',
                  subtext: 'Angular Reactive Forms guide',
                  url: 'https://angular.dev/guide/forms/reactive-forms',
                  target: '_blank'
                }
              ]
            }
          ]
        ]
      }
    ]
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('dark-theme');
  }

  isDarkMode() {
    const element = document.querySelector('html');
    return element?.classList.contains('dark-theme');
  }

  toggleDebugMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('debug-mode');
  }
}
