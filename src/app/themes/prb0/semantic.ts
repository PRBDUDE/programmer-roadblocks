import {SkySemantic} from "@themes/colors/sky";
import {NeutralSemantic} from "@themes/colors/neutral";
import {BeachSemantic} from "@themes/colors/beach";

export const Semantic = {
  semantic: {
    content: {
      borderRadius: "{border.radius.lg}"
    },
    primary: SkySemantic,
    navigation: {
      list: {
        gap: "10px"
      }
    },
    colorScheme: {
      light: {
        content: {
          background: "{surface.300}"
        },
        navigation: {
          item: {
            focusBackground: "{surface.200}",
          },
          submenuLabel: {
            background: "{surface.200}",
          }
        },
        surface: BeachSemantic
      },
      dark: {
        content: {
          background: "{surface.800}"
        },
        navigation: {
          item: {
            focusBackground: "{surface.600}",
          },
          submenuLabel: {
            background: "{surface.500}",
            color: "{text.color}"
          }
        },
        surface: NeutralSemantic
      }
    }
  }
}
