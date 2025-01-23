import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {MegaMenuModule} from "primeng/megamenu";
import {MegaMenuItem} from "primeng/api";
import {RouterLink} from "@angular/router";
import {Button} from "primeng/button";

@Component({
  selector: 'app-roadblock-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
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
                // {
                //   label: 'Regex Tester',
                //   subtext: 'Test your regular expressions',
                //   route: '/regex-tester'
                // },
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
              label: 'Menu',
              items: [
                {
                  label: 'Breadcrumb',
                  subtext: 'Breadcrumb documentation',
                  url: 'https://v18.primeng.org/breadcrumb',
                  target: '_blank'
                },
                {
                  label: 'ContextMenu',
                  subtext: 'ContextMenu documentation',
                  url: 'https://v18.primeng.org/contextmenu',
                  target: '_blank'
                },
                {
                  label: 'Dock',
                  subtext: 'Dock documentation',
                  url: 'https://v18.primeng.org/dock',
                  target: '_blank'
                },
                {
                  label: 'Menu',
                  subtext: 'Menu documentation',
                  url: 'https://v18.primeng.org/menu',
                  target: '_blank'
                },
                {
                  label: 'Menubar',
                  subtext: 'Menubar documentation',
                  url: 'https://v18.primeng.org/menubar',
                  target: '_blank'
                },
                {
                  label: 'Megamenu',
                  subtext: 'Megamenu documentation',
                  url: 'https://v18.primeng.org/megamenu',
                  target: '_blank'
                },
                {
                  label: 'PanelMenu',
                  subtext: 'PanelMenu documentation',
                  url: 'https://v18.primeng.org/panelmenu',
                  target: '_blank'
                },
                {
                  label: 'Steps',
                  subtext: 'Steps documentation',
                  url: 'https://v18.primeng.org/steps/personal',
                  target: '_blank'
                },
                {
                  label: 'TabMenu',
                  subtext: 'TabMenu documentation',
                  url: 'https://v18.primeng.org/tabmenu',
                  target: '_blank'
                },
                {
                  label: 'TieredMenu',
                  subtext: 'TieredMenu documentation',
                  url: 'https://v18.primeng.org/tieredmenu',
                  target: '_blank'
                },
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
