<style>
  h1 {
    color: #a0ffff;
  }

  h2 {
    color: #a0ffff;
    border-bottom: 1px solid #a0ffff;
  }
</style>

# PrimeNG Theme Modification

All theme presets are based upon the ***Aura*** PrimeNG Theme.

For more information visit https://primeng.org/theming/styled

## Primitive

The primitive.ts file contains the color palette addons.
There is no need to include existing colors, only new ones.

The primitive.ts file is only used to add new colors to the theme.

The colors are stored in the ***colors*** folder.
The colors are generated using the 
http://localhost:4200/demo/color-palette-generator
in this project.

## Semantic

The ***semantic.ts*** file in each theme contains the semantic section for that theme.

The semantic section is used to define the common styles for the components.

## Components

The ***components*** folder in each theme contains the component presets for that theme.

Each component is separated into a separate file.
The accordion-preset.ts file contains the accordion preset, etc...
