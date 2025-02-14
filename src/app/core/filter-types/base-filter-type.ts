export abstract class BaseFilterType {
  _isActive: boolean = false;

  hasFocus(): void {
    this._isActive = true;
  }

  lostFocus(): void {
    this._isActive = false;
  }

  abstract isInvalid(): boolean;

  abstract getErrorMessages(): string[];
}
