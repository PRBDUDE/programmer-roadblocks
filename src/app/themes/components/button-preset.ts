export const ButtonPreset = {
  colorScheme: {
    light: {
      root: {
        secondary: {
          background: "{surface.300}",
          hoverBackground: "{surface.400}",
          activeBackground: "{surface.500}",
          borderColor: "{surface.300}",
          hoverBorderColor: "{surface.400}",
          activeBorderColor: "{surface.500}",
        }
      }
    },
    dark: {
      root: {
        raisedShadow: "0 4px 2px -3px rgba(255, 255, 255, 0.2), 0 3px 4px 0 rgba(255, 255, 255, 0.14), 0 2px 7px 0 rgba(255, 255, 255, 0.12)",
      }
    }
  }
}
