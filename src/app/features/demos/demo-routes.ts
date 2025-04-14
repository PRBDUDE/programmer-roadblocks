import {Routes} from "@angular/router";

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
  },
  {
    path: 'vertical-timeline',
    loadComponent: () => import('./timeline/vertical-timeline/vertical-timeline.component')
      .then(m => m.VerticalTimelineComponent),
    title: 'Vertical Timeline'
  },
  {
    path: 'horizontal-timeline',
    loadComponent: () => import('./timeline/horizontal-timeline/horizontal-timeline.component')
      .then(m => m.HorizontalTimelineComponent),
    title: 'Horizontal Timeline'
  },
  {
    path: 'stepper',
    loadComponent: () => import('./stepper/stepper.component')
      .then(m => m.StepperComponent),
    title: 'Stepper'
  },
  {
    path: 'steps',
    loadComponent: () => import('./steps/steps.component')
      .then(m => m.StepsComponent),
    title: 'Steps'
  },
  {
    path: 'tooltip',
    loadComponent: () => import('./tooltip/tooltip.component')
      .then(m => m.TooltipComponent),
    title: 'Tooltip'
  }
]
