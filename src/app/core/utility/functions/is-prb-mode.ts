// Note that this effectively functions like an enum because of the "as const"
export const prbModes = {
  dark: 'prb-dark-theme',
  debug: 'prb-debug-mode',
  fixedFooter: 'prb-fixed-footer',
  colorPicker: 'prb-color-picker',
} as const;

type PrbModes = typeof prbModes[keyof typeof prbModes];

export function toggleMode(mode: PrbModes) {
  const element = document.querySelector('html');
  element?.classList.toggle(mode);
}

export function isPrbMode(mode: PrbModes): boolean {
  const element = document.querySelector('html');
  if (!element) {
    return false;
  }
  return element.classList.contains(mode);
}
