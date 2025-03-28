export function documentationMenu() {
  return       {
    label: 'Documentation',
    root: true,
    items: [
      [
        {
          label: 'PrimeNG',
          items: [
            {
              label: 'PrimeNG',
              subtext: 'PrimeNG official documentation',
              url: 'https://primeng.org/',
              target: '_blank'
            },
          ]
        },
        {
          label: 'Getting Started',
          items: [
            {
              label: 'Installation',
              subtext: 'PrimeNG Installation guide',
              url: 'https://primeng.org/installation',
              target: '_blank'
            },
            {
              label: 'Configuration',
              subtext: 'PrimeNG Configuration guide',
              url: 'https://primeng.org/configuration',
              target: '_blank'
            },
            {
              label: 'Playground',
              subtext: 'PrimeNG Playground',
              url: 'https://primeng.org/playground',
              target: '_blank'
            },
            {
              label: 'Theming',
              subtext: 'PrimeNG Theming',
              url: 'https://primeng.org/theming',
              target: '_blank'
            }
          ]
        }
      ],
      [
        {
          label: 'Typescript',
          items: [
            {
              label: 'Language Reference',
              subtext: 'TypeScript official documentation',
              url: 'https://www.typescriptlang.org/docs/',
              target: '_blank'
            },
            {
              label: 'Tutorial',
              subtext: 'TypeScript Tutorial',
              url: 'https://www.w3schools.com/typescript/index.php',
              target: '_blank'
            }
          ]
        },
        {
          label: 'Node',
          items: [
            {
              label: 'Documentation',
              subtext: 'Node.js official documentation',
              url: 'https://nodejs.org/docs/latest/api/',
              target: '_blank'
            },
            {
              label: 'Tutorial',
              subtext: 'Angular Tutorial',
              url: 'https://www.w3schools.com/angular/',
              target: '_blank'
            }
          ]
        }
      ],
      [
        {
          label: 'Reactive Forms',
          items: [
            {
              label: 'Reactive Forms',
              subtext: 'Angular Reactive Forms guide',
              url: 'https://angular.dev/guide/forms/reactive-forms',
              target: '_blank'
            }
          ]
        }
      ]
    ]
  }
}
