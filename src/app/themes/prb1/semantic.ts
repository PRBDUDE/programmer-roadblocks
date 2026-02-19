import {Teal} from "@themes/colors/teal";
import {Beach} from "@themes/colors/beach";
import {Stone} from "@themes/colors/stone";

export const Semantic = {
  semantic: {
    primary: Teal,
    navigation: {
      list: {
        gap: "10px"
      }
    },
    colorScheme: {
      light: {
        navigation: {
          submenuLabel: {
            background: "{surface.200}",
          }
        },
        surface: Beach
      },
      dark: {
        navigation: {
          submenuLabel: {
            background: "{surface.500}"
          }
        },
        surface: Stone
      }
    }
  }
}
