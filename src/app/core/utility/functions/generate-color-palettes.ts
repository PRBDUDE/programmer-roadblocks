import {ColorDefinition} from "../../model/color-definition";
import {palette} from "@primeng/themes";

export function generateColorPalettes(colorDefinitions: ColorDefinition[]) {
  const result: Record<string, Record<string, string>> = {};
  colorDefinitions.forEach(colorDefinition => {
    result[colorDefinition.name.toLowerCase()] = palette(colorDefinition.baseColor);
  });
  return result;
}
