export function demoTimelineMenu() {
  return {
    label: 'Timeline',
    items: [
      {
        label: 'Vertical Timeline',
        subtext: 'Vertical Timeline',
        route: '/demo/vertical-timeline'
      },
      {
        label: 'Horizontal Timeline',
        subtext: 'Horizontal Timeline',
        route: '/demo/horizontal-timeline'
      }
    ]
  }
}
