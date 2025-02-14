import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/regex-tester', pathMatch: 'full'},
  {
    path: 'input-filter',
    loadComponent: () => import('./features/demos/input/input-filter/input-filter.component')
      .then(m => m.InputFilterComponent),
    title: 'Input Filter'
  },
  {
    path: 'scrollable-page',
    loadComponent: () => import('./features/demos/scrolling/scrollable-page/scrollable-page.component')
    .then(m => m.ScrollablePageComponent),
    title: 'Scrollable Page'
  },
  {
    path: 'button-demo',
    loadComponent: () => import('./features/demos/styling/button-demo/button-demo.component')
      .then(m => m.ButtonDemoComponent),
    title: 'Button Demo'
  },
  {
    path: 'message-demo',
    loadComponent: () => import('./features/demos/styling/message-demo/message-demo.component')
      .then(m => m.MessageDemoComponent),
    title: 'Message Demo'
  },
  {
    path: 'color-palette',
    loadComponent: () => import('./features/demos/styling/color-palette/color-palette.component')
      .then(m => m.ColorPaletteComponent),
    title: 'Color Palette'
  },
  {
    path: 'reactive-forms/entry-form',
    loadComponent: () => import('./features/reactive-forms/reactive-entry-form/reactive-entry-form.component')
      .then(m => m.ReactiveEntryFormComponent),
    title: 'Reactive Entry Form'
  },
  {path: '**', redirectTo: '/color-palette', pathMatch: 'full'}
];
