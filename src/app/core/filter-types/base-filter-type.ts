/**
 * Abstract class for filter types.
 *
 * @remarks
 * This class provides the basic functionality for filter types.
 * It defines the isActive property, which indicates if the filter
 * type is active or not. It also provides methods for setting and
 * clearing the isActive property.
 */
export abstract class BaseFilterType {
  /**
   * Indicates if the filter type is active or not.
   */
  _isActive: boolean = false;

  /**
   * Sets isActive to true when the filter type has focus.
   */
  hasFocus(): void {
    this._isActive = true;
  }

  /**
   * Sets isActive to false when the filter type loses focus.
   */
  lostFocus(): void {
    this._isActive = false;
  }

  /**
   * Returns true if the filter is invalid, false if the filter is valid.
   *
   * @remarks
   * This method should be overridden by the child classes to provide
   * specific validation for each filter type.
   */
  abstract isInvalid(): boolean;

  /**
   * Returns an array of error messages for the filter.
   *
   * @remarks
   * This method should be overridden by the child classes to provide
   * specific error messages for each filter type.
   */
  abstract getErrorMessages(): string[];
}
