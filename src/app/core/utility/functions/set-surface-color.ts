import {updateSurfacePalette} from "@primeuix/themes";

/**
 * Sets the surface color of the application.
 * @param color The color to set as the surface color.
 */
export function setSurfaceColor(color: string) {
  updateSurfacePalette({
    0: '#ffffff',
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
  });
}
