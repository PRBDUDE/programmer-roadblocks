import {Component, DoCheck, signal} from '@angular/core';
import {$dt} from "@primeng/themes";
import {ColorPaletteGeneratorComponent} from "./color-palette-generator/color-palette-generator.component";
import {isMode, prbModes} from "@utility/is-mode";

@Component({
  selector: 'prb-color-palette',
  imports: [
    ColorPaletteGeneratorComponent
  ],
  templateUrl: './color-palette.component.html',
  styleUrl: './color-palette.component.scss'
})
export class ColorPaletteComponent implements DoCheck {
  ngDoCheck() {
    this.primaryColor.update(() => $dt('primary.500').value);
    this.surfaceColor.update(() => $dt('surface.500').value);
  }

  primaryColor = signal<any>($dt('primary.500').value);
  surfaceColor = signal<any>($dt('surface.500').value);
  emeraldColor = signal<any>($dt('emerald.500').value);
  greenColor = signal<any>($dt('green.500').value);
  limeColor = signal<any>($dt('lime.500').value);
  redColor = signal<any>($dt('red.500').value);
  brownColor = signal<any>($dt('brown.500').value);
  orangeColor = signal<any>($dt('orange.500').value);
  amberColor = signal<any>($dt('amber.500').value);
  yellowColor = signal<any>($dt('yellow.500').value);
  tealColor = signal<any>($dt('teal.500').value);
  cyanColor = signal<any>($dt('cyan.500').value);
  skyColor = signal<any>($dt('sky.500').value);
  blueColor = signal<any>($dt('blue.500').value);
  indigoColor = signal<any>($dt('indigo.500').value);
  violetColor = signal<any>($dt('violet.500').value);
  purpleColor = signal<any>($dt('purple.500').value);
  fuchsiaColor = signal<any>($dt('fuchsia.500').value);
  pinkColor = signal<any>($dt('pink.500').value);
  slateColor = signal<any>($dt('slate.500').value);
  grayColor = signal<any>($dt('gray.500').value);
  zincColor = signal<any>($dt('zinc.500').value);
  neutralColor = signal<any>($dt('neutral.500').value);
  stoneColor = signal<any>($dt('stone.500').value);
  sohoColor = signal<any>($dt('soho.500').value);
  vivaColor = signal<any>($dt('viva.500').value);
  oceanColor = signal<any>($dt('ocean.500').value);
  beachColor = signal<any>($dt('beach.500').value);

  protected readonly isMode = isMode;
  protected readonly prbModes = prbModes;
}
