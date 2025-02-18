import {Routes} from "@angular/router";
import {InputFilterComponent} from "./input/input-filter/input-filter.component";
import {ScrollablePageComponent} from "./scrolling/scrollable-page/scrollable-page.component";
import {ButtonDemoComponent} from "./styling/button-demo/button-demo.component";
import {MessageDemoComponent} from "./styling/message-demo/message-demo.component";
import {ColorPaletteComponent} from "./styling/color-palette/color-palette.component";

export const demo_routes: Routes = [
  {
    path: 'input-filter',
    loadComponent: () => import('./input/input-filter/input-filter.component')
      .then(m => m.InputFilterComponent),
    title: 'Input Filter'
  },
  {
    path: 'scrollable-page',
    loadComponent: () => import('./scrolling/scrollable-page/scrollable-page.component')
      .then(m => m.ScrollablePageComponent),
    title: 'Scrollable Page'
  },
  {
    path: 'button-demo',
    loadComponent: () => import('./styling/button-demo/button-demo.component')
      .then(m => m.ButtonDemoComponent),
    title: 'Button Demo'
  },
  {
    path: 'message-demo',
    loadComponent: () => import('./styling/message-demo/message-demo.component')
      .then(m => m.MessageDemoComponent),
    title: 'Message Demo'
  },
  {
    path: 'color-palette',
    loadComponent: () => import('./styling/color-palette/color-palette.component')
      .then(m => m.ColorPaletteComponent),
    title: 'Color Palette'
  }
]
