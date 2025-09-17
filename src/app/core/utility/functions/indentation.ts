export class Indentation {
  static get(level: number, extra: number = 0, spacesPerLevel = 4): string {
    const count = Math.max(0, level + extra);
    return '\u00A0'.repeat(count * spacesPerLevel);
  }
}
