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
          color: "{surface.950}",
        },
        warn: {
          background: "{amber.500}",
          hoverBackground: "{amber.600}",
          activeBackground: "{amber.700}",
          borderColor: "{amber.500}",
          hoverBorderColor: "{amber.600}",
          activeBorderColor: "{amber.700}",
          focusRing: {
            color: "{amber.500}",
          }
        }
      },
      outlined: {
        warn: {
          hoverBorderColor: "{amber.50}",
          activeBorderColor: "{amber.100}",
          borderColor: "{amber.200}",
          color: "{amber.500}"
        }
      },
      text: {
        warn: {
          hoverBackground: "{amber.50}",
          activeBackground: "{amber.100}",
          color: "{amber.500}",
        }
      },
      link: {
        color: "{surface.800}",
        hoverColor: "{surface.800}",
        activeColor: "{surface.800}"
      }
    },
    dark: {
      root: {
        raisedShadow: "0 4px 2px -3px rgba(255, 255, 255, 0.3), 0 3px 4px 0 rgba(255, 255, 255, 0.25), 0 2px 10px 0 rgba(255, 255, 255, 0.18)",
        secondary: {
          color: "{surface.50}"
        },
        warn: {
          background: "{amber.400}",
          hoverBackground: "{amber.300}",
          activeBackground: "{amber.200}",
          borderColor: "{amber.400}",
          hoverBorderColor: "{amber.300}",
          activeBorderColor: "{amber.200}",
          color: "{amber.950}",
          hoverColor: "{amber.950}",
          activeColor: "{amber.950}",
          focusRing: {
            color: "{amber.400}",
          }
        }
      },
      outlined: {
        warn: {
          hoverBackground: "color-mix(in srgb, {amber.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {amber.400}, transparent 84%)",
          borderColor: "{amber.700}",
          color: "{amber.400}"
        }
      },
      text: {
        warn: {
          hoverBackground: "color-mix(in srgb, {amber.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {amber.400}, transparent 84%)",
          color: "{amber.400}",
        }
      },
      link: {
        color: "{surface.50}",
        hoverColor: "{surface.50}",
        activeColor: "{surface.50}"
      }
    }
  }
}
