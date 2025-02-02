import { Component } from '@angular/core';
import {PaletteGeneratorComponent} from "../palette-generator/palette-generator.component";
import {$dt} from "@primeng/themes";

@Component({
    selector: 'app-color-palette',
    imports: [
        PaletteGeneratorComponent
    ],
    templateUrl: './color-palette.component.html',
    styleUrl: './color-palette.component.scss'
})
export class ColorPaletteComponent {
  primaryColor = $dt('primary.500').value;
  emeraldColor = $dt('emerald.500').value;
  greenColor = $dt('green.500').value;
  limeColor = $dt('lime.500').value;
  redColor = $dt('red.500').value;
  orangeColor = $dt('orange.500').value;
  amberColor = $dt('amber.500').value;
  yellowColor = $dt('yellow.500').value;
  tealColor = $dt('teal.500').value;
  cyanColor = $dt('cyan.500').value;
  skyColor = $dt('sky.500').value;
  blueColor = $dt('blue.500').value;
  indigoColor = $dt('indigo.500').value;
  violetColor = $dt('violet.500').value;
  purpleColor = $dt('purple.500').value;
  fuchsiaColor = $dt('fuchsia.500').value;
  pinkColor = $dt('pink.500').value;
  slateColor = $dt('slate.500').value;
  grayColor = $dt('gray.500').value;
  zincColor = $dt('zinc.500').value;
  neutralColor = $dt('neutral.500').value;
  stoneColor = $dt('stone.500').value;
}
