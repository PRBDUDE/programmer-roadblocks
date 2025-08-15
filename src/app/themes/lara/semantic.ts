import {Sky} from "../colors/sky";

export const Semantic = {
  semantic: {
    primary: Sky,
    navigation: {
      list: {
        gap: "10px"
      }
    },
    colorScheme: {
      light: {
        navigation: {
          item: {
            focusBackground: "{surface.200}",
          },
          submenuLabel: {
            background: "{surface.200}",
          }
        }
      },
      dark: {
        navigation: {
          item: {
            focusBackground: "{surface.600}",
          },
          submenuLabel: {
            background: "{surface.500}",
            color: "{text.color}"
          }
        }
      }
    }
  }
}
