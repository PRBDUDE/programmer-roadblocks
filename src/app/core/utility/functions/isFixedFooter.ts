export function isFixedFooter(): boolean {
  const element = document.querySelector('html');
  if (!element) {
    return false;
  }
  return element.classList.contains('prb-fixed-footer');
}
