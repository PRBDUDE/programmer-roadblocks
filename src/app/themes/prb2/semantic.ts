import {BrownSemantic} from "@themes/colors/brown";
import {StoneSemantic} from "@themes/colors/stone";
import {BeachSemantic} from "@themes/colors/beach";

export const Semantic = {
  semantic: {
    content: {
      borderRadius: "{border.radius.xl}"
    },
    primary: BrownSemantic,
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
        surface: BeachSemantic
      },
      dark: {
        navigation: {
          submenuLabel: {
            background: "{surface.500}"
          }
        },
        surface: StoneSemantic
      }
    }
  }
}
