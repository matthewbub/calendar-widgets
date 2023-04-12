/** Types */
import { StringOrNullUndefined } from "../commonTypes";

/**
 * Validates the provided locale argument.
 *
 * @param {string|null|undefined} locale - The locale to validate.
 * @throws {TypeError} If the provided locale value is not a string, null, or undefined.
 * @returns {boolean} Returns `true` if the provided locale is valid, otherwise throws a `TypeError`.
 */
export const isValidLocale = (locale: StringOrNullUndefined) => {
  if (typeof locale !== 'undefined' && typeof locale !== 'string' && locale !== null) {
    throw new TypeError('Invalid locale. The locale must be a string, null or undefined.');
  }

  return true;
}