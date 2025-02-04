import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {MegaMenuModule} from "primeng/megamenu";
import {MegaMenuItem} from "primeng/api";
import {RouterLink} from "@angular/router";
import {Button} from "primeng/button";

@Component({
  selector: 'app-roadblock-header',
  imports: [
    MegaMenuModule,
    NgIf,
    RouterLink,
    Button
  ],
  templateUrl: './roadblock-header.component.html',
  styleUrl: './roadblock-header.component.scss'
})
export class RoadblockHeaderComponent implements OnInit {
  menuItems: MegaMenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
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
}
