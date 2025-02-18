import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/color-palette',
    pathMatch: 'full'
  },
  {
    path: 'demo',
    loadChildren: () => import('./features/demos/demo-routes').then(m => m.demo_routes),
  },
  {
    path: 'reactive-forms/entry-form',
    loadComponent: () => import('./features/reactive-forms/reactive-entry-form/reactive-entry-form.component')
      .then(m => m.ReactiveEntryFormComponent),
    title: 'Reactive Entry Form'
  },
  {
    path: 'page-not-found',
    loadComponent: () => import('./core/error-handlers/page-not-found/page-not-found.component')
      .then(m => m.PageNotFoundComponent),
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
    pathMatch: 'full'
  }
];
