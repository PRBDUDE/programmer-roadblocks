import {TealSemantic} from "@themes/colors/teal";
import {BeachSemantic} from "@themes/colors/beach";
import {StoneSemantic} from "@themes/colors/stone";

export const Semantic = {
  semantic: {
    primary: TealSemantic,
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
