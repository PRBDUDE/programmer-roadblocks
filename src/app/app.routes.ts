import {Routes} from '@angular/router';
import {InputFilterComponent} from "./input-filter/input-filter.component";
import {ScrollablePageComponent} from "./scrollable-page/scrollable-page.component";
import {ButtonDemoComponent} from "./button-demo/button-demo.component";
import {MessageDemoComponent} from "./message-demo/message-demo.component";
import {ColorPaletteComponent} from "./color-palette/color-palette.component";

export const routes: Routes = [
  {path: '', redirectTo: '/regex-tester', pathMatch: 'full'},
  {path: 'input-filter', component: InputFilterComponent, title: 'Input Filter'},
  // {path: 'regex-tester', component: RegexTesterComponent, title: 'Regex Tester'},
  {path: 'scrollable-page', component: ScrollablePageComponent, title: 'Scrollable Page'},
  {path: 'button-demo', component: ButtonDemoComponent, title: 'Button Demo'},
  {path: 'message-demo', component: MessageDemoComponent, title: 'Message Demo'},
  {path: 'color-palette', component: ColorPaletteComponent, title: 'Color Palette'},
  {path: '**', redirectTo: '/color-palette', pathMatch: 'full'}
];
