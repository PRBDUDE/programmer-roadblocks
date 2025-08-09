import {updatePrimaryPalette} from "@primeuix/themes";

/**
 * Sets the primary color of the application.
 * @param color The color to set as primary.
 */
export function setPrimaryColor(color: string): void {
  updatePrimaryPalette({
    50: '{' + color + '.50}',
    100: '{' + color + '.100}',
    200: '{' + color + '.200}',
    300: '{' + color + '.300}',
    400: '{' + color + '.400}',
    500: '{' + color + '.500}',
    600: '{' + color + '.600}',
    700: '{' + color + '.700}',
    800: '{' + color + '.800}',
    900: '{' + color + '.900}',
    950: '{' + color + '.900}'
  })
}
