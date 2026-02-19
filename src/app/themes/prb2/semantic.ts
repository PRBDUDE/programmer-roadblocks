import {Brown} from "@themes/colors/brown";

export const Semantic = {
  semantic: {
    content: {
      borderRadius: "{border.radius.xl}"
    },
    primary: Brown,
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
        }
      },
      dark: {
        navigation: {
          submenuLabel: {
            background: "{surface.500}"
          }
        }
      }
    }
  }
}
