import {Sky} from "./colors/sky";
import {Neutral} from "./colors/neutral";
import {Beach} from "./colors/beach";
import { Yellow } from "./colors/yellow";
import { Teal } from "./colors/teal";

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
        },
        surface: Beach
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
        },
        surface: Neutral
      }
    }
  }
}
