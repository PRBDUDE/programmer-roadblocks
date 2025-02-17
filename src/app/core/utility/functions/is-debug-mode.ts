export function isDebugMode(): boolean {
  const element = document.querySelector('html');
  if (!element) {
    return false;
  }
  return element.classList.contains('debug-mode');
}
