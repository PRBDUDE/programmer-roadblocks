export function demoStylingMenu() {
  return {
    label: 'Styling',
    items: [
      {
        label: 'Color Palette',
        subtext: 'Color palettes',
        route: '/demo/color-palette'
      },
      {
        label: 'Button Styles',
        subtext: 'Primary, Secondary and Tertiary buttons',
        route: '/demo/button-demo'
      },
      {
        label: 'Message Styles',
        subtext: 'Success, Info, Warning and Error messages',
        route: '/demo/message-demo'
      }
    ]
  }
}
