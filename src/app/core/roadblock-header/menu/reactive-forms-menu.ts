export function reactiveFormsMenu() {
  return {
    label: 'Reactive Forms',
      root: true,
    items: [
    [
      {
        label: 'Entry Form',
        items: [
          {
            label: 'Entry Form',
            subtext: 'Create a new entry',
            route: '/reactive-forms/entry-form'
          }
        ]
      }
    ]
  ]
  }
}
