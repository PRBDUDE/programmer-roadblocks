export function isDarkMode(): boolean {
  const element = document.querySelector('html');
  return element?.classList.contains('prb-dark-theme') || false;
}
